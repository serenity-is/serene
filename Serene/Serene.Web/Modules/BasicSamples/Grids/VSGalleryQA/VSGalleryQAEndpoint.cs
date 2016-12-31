#if !COREFX
namespace Serene.BasicSamples.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
#endif
    using System.Linq;
    using System.Net;
    using System.IO;
    using System.IO.Compression;

    [Route("Services/BasicSamples/VSGalleryQA/{action}")]
    [ServiceAuthorize]
    public class VSGalleryQAController : ServiceEndpoint
    {
        public ListResponse<VSGalleryQAThread> List(ListRequest request)
        {
            request.CheckNotNull();

            var response = new ListResponse<VSGalleryQAThread>();

            IEnumerable<VSGalleryQAThread> filtered = GetAllThreads();

            if (!string.IsNullOrWhiteSpace(request.ContainsText))
            {
                var contains = StringHelper.RemoveDiacritics(request.ContainsText.TrimToEmpty()).ToLowerInvariant();

                Func<string, bool> match = s => StringHelper.RemoveDiacritics(s ?? "")
                    .ToLowerInvariant().IndexOf(contains) >= 0;

                filtered = filtered.Where(x => match(x.Title) || match(x.StartedByName) || match(x.ThreadId.ToString()) ||
                    x.Posts.Any(p => match(p.Message) || match(p.PostedByName)));
            }

            response.TotalCount = filtered.Count();
            response.Skip = request.Skip;
            response.Take = request.Take;

            if (request.Skip > 0)
                filtered = filtered.Skip(request.Skip);

            if (request.Take > 0)
                filtered = filtered.Take(request.Take);

            response.Entities = filtered.ToList(); 

            return response;
        }

        private List<VSGalleryQAThread> GetAllThreads()
        {
            // check for new threads every 5 minutes
            return LocalCache.Get("VSGalleryCachedThreads", TimeSpan.FromMinutes(5), () =>
            {
                DateTime localCopyLatest = DateTime.MinValue;

                // first load threads from local copy (a json file) if any
                var localThreads = LoadFromLocalCopy();
                if (localThreads.Any())
                    localCopyLatest = localThreads.Max(x => x.LastPostOn);

                var result = new List<VSGalleryQAThread>();

                int page = 1;
                while (true)
                {
                    var pageThreads = new VSGalleryQAParser().ParsePage(page++);

                    result.AddRange(pageThreads.Where(x => !result.Any(y => y.ThreadId == x.ThreadId)));

                    // VSGallery shows 10 threads per page, if we received less, we are in last page
                    if (pageThreads.Count < 10)
                        break;

                    // if there are no newer post on this page than latest copy we fetched, break it
                    if (!pageThreads.Any(x => x.LastPostOn > localCopyLatest))
                        break;

                    // don't fetch more than 100 pages, just a safeguard for infinite loop
                    if (page > 100)
                        break;
                }

                result.AddRange(localThreads.Where(x => !result.Any(y => y.ThreadId == x.ThreadId)));

                System.IO.File.WriteAllText(Server.MapPath(LocalCopyFile), JSON.StringifyIndented(result));

                return result;
            });
        }

        // we keep a copy of threads we load from VSGallery in JSON file below, 
        // to avoid loading all pages every time list method is called
        // otherwise we would have to fetch and parse hundreds of pages from VSGallery
        private const string LocalCopyFile = "~/App_Data/VSGalleryQAThreads.v1.json";

        private List<VSGalleryQAThread> LoadFromLocalCopy()
        {
            var path = Server.MapPath(LocalCopyFile);

            if (!System.IO.File.Exists(path))
            {
                // load it from github, VSGallery might not like loading hundreds of pages
                var bytes = new WebClient().DownloadData("https://github.com/volkanceylan/Serene/raw/master/Serene/Serene.Web/" + 
                    "Modules/BasicSamples/Grids/VSGalleryQA/VSGalleryQAThreads.v1.deflate");
                var buffer = new byte[65536];
                using (var output = new MemoryStream())
                using (var input = new MemoryStream(bytes))
                using (var ds = new DeflateStream(input, CompressionMode.Decompress))
                {
                    ds.CopyTo(output);
                    System.IO.File.WriteAllBytes(path, output.ToArray());
                }
            }

            return JSON.Parse<List<VSGalleryQAThread>>(System.IO.File.ReadAllText(path));
        }

    }
}
#endif