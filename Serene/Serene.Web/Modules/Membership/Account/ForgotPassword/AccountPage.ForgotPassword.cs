
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
#if ASPNETCORE
    using Microsoft.AspNetCore.DataProtection;
    using Microsoft.AspNetCore.Mvc;
    using System.Web.Hosting;
#else
    using System.Web.Mvc;
    using System.Web.Security;
#endif

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

#if ASPNETCORE
                var token = Convert.ToBase64String(HttpContext.RequestServices
                    .GetDataProtector("ResetPassword").Protect(bytes));
#else
                var token = Convert.ToBase64String(MachineKey.Protect(bytes, "ResetPassword"));
#endif

                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
#if ASPNETCORE
                    Request.GetBaseUri().ToString();
#else
                    Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");
#endif

                var resetLink = UriHelper.Combine(externalUrl, "Account/ResetPassword?t=");
                resetLink = resetLink + Uri.EscapeDataString(token);

                var emailModel = new ResetPasswordEmailModel();
                emailModel.Username = user.Username;
                emailModel.DisplayName = user.DisplayName;
                emailModel.ResetLink = resetLink;

                var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
#if ASPNETCORE
                var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                    MVC.Views.Membership.Account.ResetPassword.AccountResetPasswordEmail, emailModel);
#else
                var emailBody = TemplateHelper.RenderTemplate(
                    MVC.Views.Membership.Account.ResetPassword.AccountResetPasswordEmail, emailModel);
#endif

                Common.EmailHelper.Send(emailSubject, emailBody, user.Email);

                return new ServiceResponse();
            });
        }
    }
}
