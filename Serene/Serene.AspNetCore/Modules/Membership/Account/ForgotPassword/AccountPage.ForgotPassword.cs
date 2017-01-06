
namespace Serene.Membership.Pages
{
    using Administration.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.IO;
#if COREFX
    using MailKit.Net.Smtp;
    using MimeKit;
    using MailKit.Security;
#else
    using System.Net.Mail;
#endif
    using System.Web;
    using Microsoft.AspNetCore.DataProtection;
    using Microsoft.AspNetCore.Mvc;
    using System.Web.Hosting;

    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult ForgotPassword()
        {
            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.ForgotPassword.AccountForgotPassword_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.ForgotPassword.AccountForgotPassword);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ForgotPassword(ForgotPasswordRequest request)
        {
            return this.UseConnection("Default", connection =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Email))
                    throw new ArgumentNullException("email");

                var user = connection.TryFirst<UserRow>(UserRow.Fields.Email == request.Email);
                if (user == null)
                    throw new ValidationError("CantFindUserWithEmail", Texts.Validation.CantFindUserWithEmail);

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

                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                    Request.GetBaseUri().ToString();

                var resetLink = UriHelper.Combine(externalUrl, "Account/ResetPassword?t=");
                resetLink = resetLink + Uri.EscapeDataString(token);

                var emailModel = new ResetPasswordEmailModel();
                emailModel.Username = user.Username;
                emailModel.DisplayName = user.DisplayName;
                emailModel.ResetLink = resetLink;

                var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                    MVC.Views.Membership.Account.ResetPassword.AccountResetPasswordEmail, emailModel);

                Common.EmailHelper.Send(emailSubject, emailBody, user.Email);

                return new ServiceResponse();
            });
        }
    }
}
