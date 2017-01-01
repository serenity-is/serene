namespace Serene.Common.Pages
{
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using System.Web;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Http;
    using HttpContextBase = Microsoft.AspNetCore.Http.HttpContext;
#else
    using System.Web.Mvc;
#endif

    public class FileController : Controller
    {
        [Route("upload/{*pathInfo}")]
        public ActionResult Read(string pathInfo)
        {
            UploadHelper.CheckFileNameSecurity(pathInfo);

            var filePath = UploadHelper.DbFilePath(pathInfo);
            var mimeType = UploadHelper.GetMimeType(filePath);

#if ASPNETCORE
            return new PhysicalFileResult(filePath, mimeType);
#else
            return new FilePathResult(filePath, mimeType);
#endif
        }

        [Route("File/TemporaryUpload")]
        [AcceptVerbs("POST")]
        public ActionResult TemporaryUpload()
        {
            var response = this.ExecuteMethod(() => HandleUploadRequest(this.HttpContext));

#if ASPNETCORE
            if (!((string)Request.Headers["Accept"] ?? "").Contains("json"))
#else
            if (!(Request.Headers["Accept"] ?? "").Contains("json"))
#endif
                response.ContentType = "text/plain";

            return response;
        }

        [Route("File/HandleUploadRequest")]
        private ServiceResponse HandleUploadRequest(HttpContextBase context)
        {
#if ASPNETCORE
            if (context.Request.Form.Files.Count != 1)
                throw new ArgumentOutOfRangeException("files");

            var file = context.Request.Form.Files[0];
#else
            if (context.Request.Files.Count != 1)
                throw new ArgumentOutOfRangeException("files");

            var file = context.Request.Files[0];
#endif

            if (file == null)
                throw new ArgumentNullException("file");

            if (file.FileName.IsEmptyOrNull())
                throw new ArgumentNullException("filename");

            var processor = new UploadProcessor
            {
#if !COREFX
                ThumbWidth = 128,
                ThumbHeight = 96
#endif
            };

#if ASPNETCORE
            if (processor.ProcessStream(file.OpenReadStream(), Path.GetExtension(file.FileName)))
#else
            if (processor.ProcessStream(file.InputStream, Path.GetExtension(file.FileName)))
#endif
            {
                var temporaryFile = "temporary/" + Path.GetFileName(processor.FilePath);
                using (var sw = new StreamWriter(System.IO.File.OpenWrite(Path.ChangeExtension(UploadHelper.DbFilePath(temporaryFile), ".orig"))))
                    sw.WriteLine(file.FileName);

                return new UploadResponse()
                {
                    TemporaryFile = temporaryFile,
                    Size = processor.FileSize,
                    IsImage = processor.IsImage,
#if !COREFX
                    Width = processor.ImageWidth,
                    Height = processor.ImageHeight
#endif
                };
            }
            else
            {
                return new UploadResponse()
                {
                    Error = new ServiceError()
                    {
                        Code = "Exception",
                        Message = processor.ErrorMessage
                    }
                };
            }
        }

        private class UploadResponse : ServiceResponse
        {
            public string TemporaryFile { get; set; }
            public long Size { get; set; }
            public bool IsImage { get; set; }
            public int Width { get; set; }
            public int Height { get; set; }
        }
    }
}
