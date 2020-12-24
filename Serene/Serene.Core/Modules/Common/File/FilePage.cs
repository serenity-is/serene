using HttpContextBase = Microsoft.AspNetCore.Http.HttpContext;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Services;
using Serenity.Web;
using System;
using System.IO;

namespace Serene.Common.Pages
{
    public class FileController : Controller
    {
        public FileController(IUploadStorage uploadStorage, ITextLocalizer localizer)
        {
            UploadStorage = uploadStorage ??
                throw new ArgumentNullException(nameof(uploadStorage));
            Localizer = localizer ??
                throw new ArgumentNullException(nameof(localizer));
        }

        protected IUploadStorage UploadStorage { get; }
        protected ITextLocalizer Localizer { get; }

        [Route("upload/{*pathInfo}")]
        public ActionResult Read(string pathInfo)
        {
            UploadPathHelper.CheckFileNameSecurity(pathInfo);

            if (!UploadStorage.FileExists(pathInfo))
            	return new NotFoundResult();

            var mimeType = KnownMimeTypes.Get(pathInfo);
            var stream = UploadStorage.OpenFile(pathInfo);
            return new FileStreamResult(stream, mimeType);
        }

        [Route("File/TemporaryUpload")]
        [AcceptVerbs("POST")]
        public ActionResult TemporaryUpload()
        {
            var response = this.ExecuteMethod(() => HandleUploadRequest(HttpContext));

            if (!((string)Request.Headers["Accept"] ?? "").Contains("json"))
                response.ContentType = "text/plain";

            return response;
        }

        [Route("File/HandleUploadRequest")]
        private ServiceResponse HandleUploadRequest(HttpContext context)
        {
            if (context.Request.Form.Files.Count != 1)
                throw new ArgumentOutOfRangeException("files");

            var file = context.Request.Form.Files[0];

            if (file == null)
                throw new ArgumentNullException("file");

            if (file.FileName.IsEmptyOrNull())
                throw new ArgumentNullException("filename");

            var processor = new UploadProcessor(UploadStorage)
            {
                ThumbWidth = 128,
                ThumbHeight = 96
            };

            if (processor.ProcessStream(file.OpenReadStream(), 
            	Path.GetExtension(file.FileName), Localizer))
            {
                var temporaryFile = processor.TemporaryFile;
                UploadStorage.SetOriginalName(temporaryFile, file.FileName);

                return new UploadResponse()
                {
                    TemporaryFile = temporaryFile,
                    Size = processor.FileSize,
                    IsImage = processor.IsImage,
                    Width = processor.ImageWidth,
                    Height = processor.ImageHeight
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
