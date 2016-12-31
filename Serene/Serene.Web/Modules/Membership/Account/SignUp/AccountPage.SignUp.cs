
namespace Serene.Membership.Pages
{
    using Administration;
    using Administration.Entities;
    using Administration.Repositories;
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
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.DataProtection;
    using System.Web.Hosting;
#else
    using System.Web.Mvc;
    using System.Web.Security;
#endif

    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult SignUp()
        {
            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.SignUp.AccountSignUp_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.SignUp.AccountSignUp);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> SignUp(SignUpRequest request)
        {
            return this.UseConnection("Default", connection =>
            {
                request.CheckNotNull();

                Check.NotNullOrWhiteSpace(request.Email, "email");
                Check.NotNullOrEmpty(request.Password, "password");
                UserRepository.ValidatePassword(request.Email, request.Password, true);
                Check.NotNullOrWhiteSpace(request.DisplayName, "displayName");

                if (connection.Exists<UserRow>(
                        UserRow.Fields.Username == request.Email |
                        UserRow.Fields.Email == request.Email))
                {
                    throw new ValidationError("EmailInUse", Texts.Validation.CantFindUserWithEmail);
                }

                using (var uow = new UnitOfWork(connection))
                {
                    string salt = null;
                    var hash = UserRepository.GenerateHash(request.Password, ref salt);
                    var displayName = request.DisplayName.TrimToEmpty();
                    var email = request.Email;
                    var username = request.Email;

                    var fld = UserRow.Fields;
                    var userId = (int)connection.InsertAndGetID(new UserRow
                    {
                        Username = username,
                        Source = "sign",
                        DisplayName = displayName,
                        Email = email,
                        PasswordHash = hash,
                        PasswordSalt = salt,
                        IsActive = 0,
                        InsertDate = DateTime.Now,
                        InsertUserId = 1,
                        LastDirectoryUpdate = DateTime.Now
                    });

                    byte[] bytes;
                    using (var ms = new MemoryStream())
                    using (var bw = new BinaryWriter(ms))
                    {
                        bw.Write(DateTime.UtcNow.AddHours(3).ToBinary());
                        bw.Write(userId);
                        bw.Flush();
                        bytes = ms.ToArray();
                    }

#if ASPNETCORE
                    var token = Convert.ToBase64String(HttpContext.RequestServices
                        .GetDataProtector("Activate").Protect(bytes));
#else
                    var token = Convert.ToBase64String(MachineKey.Protect(bytes, "Activate"));
#endif

                    var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
#if ASPNETCORE
                    Request.GetBaseUri().ToString();
#else
                    Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");
#endif

                    var activateLink = UriHelper.Combine(externalUrl, "Account/Activate?t=");
                    activateLink = activateLink + Uri.EscapeDataString(token);

                    var emailModel = new ActivateEmailModel();
                    emailModel.Username = username;
                    emailModel.DisplayName = displayName;
                    emailModel.ActivateLink = activateLink;

                    var emailSubject = Texts.Forms.Membership.SignUp.ActivateEmailSubject.ToString();
#if ASPNETCORE
                    var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                        MVC.Views.Membership.Account.SignUp.AccountActivateEmail, emailModel);
#else
                    var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.Membership.Account.SignUp.AccountActivateEmail, emailModel);
#endif

                    Common.EmailHelper.Send(emailSubject, emailBody, email);

                    uow.Commit();
                    UserRetrieveService.RemoveCachedUser(userId, username);

                    return new ServiceResponse();
                }
            });
        }

        [HttpGet]
        public ActionResult Activate(string t)
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            using (var uow = new UnitOfWork(connection))
            {
                int userId;
                try
                {
#if ASPNETCORE
                    var bytes = HttpContext.RequestServices
                        .GetDataProtector("Activate").Unprotect(Convert.FromBase64String(t));
#else
                    var bytes = MachineKey.Unprotect(Convert.FromBase64String(t), "ResetPassword");
#endif
                    using (var ms = new MemoryStream(bytes))
                    using (var br = new BinaryReader(ms))
                    {
                        var dt = DateTime.FromBinary(br.ReadInt64());
                        if (dt < DateTime.UtcNow)
                            return Error(Texts.Validation.InvalidActivateToken);

                        userId = br.ReadInt32();
                    }
                }
                catch (Exception)
                {
                    return Error(Texts.Validation.InvalidActivateToken);
                }

                var user = uow.Connection.TryById<UserRow>(userId);
                if (user == null || user.IsActive != 0)
                    return Error(Texts.Validation.InvalidActivateToken);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = user.UserId.Value,
                    IsActive = 1
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);
                uow.Commit();

                return new RedirectResult("~/Account/Login?activated=" + Uri.EscapeDataString(user.Email));
            }
        }
    }
}
