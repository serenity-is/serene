using Microsoft.AspNetCore.Http;

namespace Serene.Common.Pages;

public class FilePage : Controller
{
    private readonly IUploadStorage uploadStorage;
    private readonly IUploadProcessor uploadProcessor;

    public FilePage(IUploadStorage uploadStorage, IUploadProcessor uploadProcessor)
    {
        this.uploadStorage = uploadStorage ?? throw new ArgumentNullException(nameof(uploadStorage));
        this.uploadProcessor = uploadProcessor ?? throw new ArgumentNullException(nameof(uploadProcessor));
    }

    [Route("upload/{*pathInfo}")]
    public IActionResult Read(string pathInfo,
        [FromServices] IUploadFileResponder responder)
    {
        return responder.Read(pathInfo, Response.Headers);
    }

    [Route("File/TemporaryUpload")]
    [AcceptVerbs("POST")]
    public ActionResult TemporaryUpload()
    {
        var response = this.ExecuteMethod(() => HandleUploadRequest(HttpContext));

        if (!((string)Request.Headers["Accept"] ?? "").Contains("json", StringComparison.Ordinal))
            response.ContentType = "text/plain";

        return response;
    }

    [Route("File/TemporaryUploadCK")]
    [AcceptVerbs("POST"), IgnoreAntiforgeryToken]
    public ActionResult TemporaryUploadCK()
    {
        var response = (UploadResponse)HandleUploadRequest(HttpContext);
        if (response.Error != null)
            return new JsonResult(new 
            {
                uploaded = 0,
                error = new
                {
                    message = response.Error.Message
                }
            });

        return new JsonResult(new
        {
            uploaded = 1,
            fileName = response.TemporaryFile,
            url = VirtualPathUtility.ToAbsolute(HttpContext,
                uploadStorage.GetFileUrl(response.TemporaryFile))
        });
    }

    [NonAction]
    private ServiceResponse HandleUploadRequest(HttpContext context)
    {
        if (context.Request.Form.Files.Count != 1)
            throw new ArgumentOutOfRangeException(nameof(context.Request.Form.Files));

        var file = context.Request.Form.Files[0] ?? throw new ArgumentNullException("file");
        if (file.FileName.IsEmptyOrNull())
            throw new ArgumentNullException("filename");

        IUploadOptions uploadOptions = new UploadOptions
        {
            ThumbWidth = 128,
            ThumbHeight = 96,
            ThumbMode = ImageScaleMode.PreserveRatioNoFill
        };

        var uploadIntent = Request.Query["uploadIntent"];
        if (!string.IsNullOrEmpty(uploadIntent))
        {
            // if desired modify uploadOptions here based on uploadIntent
        }

        var uploadInfo = uploadProcessor.Process(file.OpenReadStream(),
            file.FileName, uploadOptions);

        if (uploadInfo.Success)
        {
            uploadStorage.SetOriginalName(uploadInfo.TemporaryFile, file.FileName);

            return new UploadResponse()
            {
                TemporaryFile = uploadInfo.TemporaryFile,
                Size = uploadInfo.FileSize,
                IsImage = uploadInfo.IsImage,
                Width = uploadInfo.ImageWidth,
                Height = uploadInfo.ImageHeight
            };
        }
        else
        {
            return new UploadResponse()
            {
                Error = new ServiceError()
                {
                    Code = "Exception",
                    Message = uploadInfo.ErrorMessage
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
