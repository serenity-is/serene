namespace Serene.Common.Pages
{
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
    using Microsoft.AspNetCore.Mvc;
    using HttpContextBase = Microsoft.AspNetCore.Http.HttpContext;

    public class FileController : Controller
    {
        [Route("upload/{*pathInfo}")]
        public ActionResult Read(string pathInfo)
        {
            UploadHelper.CheckFileNameSecurity(pathInfo);

            var filePath = UploadHelper.DbFilePath(pathInfo);
            var mimeType = UploadHelper.GetMimeType(filePath);

            return new PhysicalFileResult(filePath, mimeType);
        }

        [Route("File/TemporaryUpload")]
        [AcceptVerbs("POST")]
        public ActionResult TemporaryUpload()
        {
            var response = this.ExecuteMethod(() => HandleUploadRequest(this.HttpContext));

            if (!((string)Request.Headers["Accept"] ?? "").Contains("json"))
                response.ContentType = "text/plain";

            return response;
        }

        [Route("File/HandleUploadRequest")]
        private ServiceResponse HandleUploadRequest(HttpContextBase context)
        {
            if (context.Request.Form.Files.Count != 1)
                throw new ArgumentOutOfRangeException("files");

            var file = context.Request.Form.Files[0];

            if (file == null)
                throw new ArgumentNullException("file");

            if (file.FileName.IsEmptyOrNull())
                throw new ArgumentNullException("filename");

            var processor = new UploadProcessor
            {
                ThumbWidth = 128,
                ThumbHeight = 96
            };

            if (processor.ProcessStream(file.OpenReadStream(), Path.GetExtension(file.FileName)))
            {
                var temporaryFile = "temporary/" + Path.GetFileName(processor.FilePath);
                using (var sw = new StreamWriter(System.IO.File.OpenWrite(Path.ChangeExtension(UploadHelper.DbFilePath(temporaryFile), ".orig"))))
                    sw.WriteLine(file.FileName);

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
