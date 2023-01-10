using Serene.Administration;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System;
using System.IO;
using Microsoft.Extensions.Options;
using Serene.Common;
using Serenity.Extensions;

namespace Serene.Membership.Pages
{
    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult ForgotPassword()
        {
            return View(MVC.Views.Membership.Account.ForgotPassword.ForgotPasswordPage);
        }

        [HttpPost, JsonRequest]
        public Result<ServiceResponse> ForgotPassword(ForgotPasswordRequest request, 
            [FromServices] IEmailSender emailSender,
            [FromServices] IOptions<EnvironmentSettings> options = null)
        {
            return this.UseConnection("Default", connection =>
            {
                if (request is null)
                    throw new ArgumentNullException(nameof(request));

                if (string.IsNullOrEmpty(request.Email))
                    throw new ArgumentNullException(nameof(request.Email));

                var user = connection.TryFirst<UserRow>(UserRow.Fields.Email == request.Email);
                if (user == null)
                    throw new ValidationError("CantFindUserWithEmail", Texts.Validation.CantFindUserWithEmail.ToString(Localizer));

                byte[] bytes;
                using (var ms = new MemoryStream())
                using (var bw = new BinaryWriter(ms))
                {
                    bw.Write(DateTime.UtcNow.AddHours(3).ToBinary());
                    bw.Write(user.UserId.Value);
                    bw.Flush();
                    bytes = ms.ToArray();
                }

                var token = Convert.ToBase64String(HttpContext.RequestServices
                    .GetDataProtector("ResetPassword").Protect(bytes));

                var externalUrl = options?.Value.SiteExternalUrl.TrimToNull() ??
                    Request.GetBaseUri().ToString();

                var resetLink = UriHelper.Combine(externalUrl, "Account/ResetPassword?t=");
                resetLink += Uri.EscapeDataString(token);

                var emailModel = new ResetPasswordEmailModel
                {
                    Username = user.Username,
                    DisplayName = user.DisplayName,
                    ResetLink = resetLink
                };

                var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString(Localizer);
                var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                    MVC.Views.Membership.Account.ResetPassword.ResetPasswordEmail, emailModel);

                if (emailSender is null)
                    throw new ArgumentNullException(nameof(emailSender));

                emailSender.Send(subject: emailSubject, body: emailBody, mailTo: user.Email);

                return new ServiceResponse();
            });
        }
    }
}
