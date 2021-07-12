using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Serene.Administration;
using Serene.Administration.Entities;
using Serene.Administration.Repositories;
using Serene.Common;
using Serenity;
using Serenity.Data;
using Serenity.Extensions;
using Serenity.Services;
using Serenity.Web;
using System;
using System.IO;

namespace Serene.Membership.Pages
{
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

        [HttpPost, JsonRequest]
        public Result<ServiceResponse> SignUp(SignUpRequest request,
        	[FromServices] IEmailSender emailSender,
        	[FromServices] IOptions<EnvironmentSettings> options = null)
        {
            return this.UseConnection("Default", connection =>
            {
                if (request is null)
                    throw new ArgumentNullException(nameof(request));

                if (string.IsNullOrWhiteSpace(request.Email))
                    throw new ArgumentNullException(nameof(request.Email));
                if (string.IsNullOrEmpty(request.Password))
                    throw new ArgumentNullException(nameof(request.Password));
                UserRepository.ValidatePassword(request.Password, Localizer);
                if (string.IsNullOrWhiteSpace(request.DisplayName))
                    throw new ArgumentNullException(nameof(request.DisplayName));

                if (connection.Exists<UserRow>(
                        UserRow.Fields.Username == request.Email |
                        UserRow.Fields.Email == request.Email))
                {
                    throw new ValidationError("EmailInUse", Texts.Validation.EmailInUse.ToString(Localizer));
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

                    var token = Convert.ToBase64String(HttpContext.RequestServices
                        .GetDataProtector("Activate").Protect(bytes));

                    var externalUrl = options?.Value.SiteExternalUrl ??
                    Request.GetBaseUri().ToString();

                    var activateLink = UriHelper.Combine(externalUrl, "Account/Activate?t=");
                    activateLink = activateLink + Uri.EscapeDataString(token);

                    var emailModel = new ActivateEmailModel();
                    emailModel.Username = username;
                    emailModel.DisplayName = displayName;
                    emailModel.ActivateLink = activateLink;

                    var emailSubject = Texts.Forms.Membership.SignUp.ActivateEmailSubject.ToString(Localizer);
                    var emailBody = TemplateHelper.RenderViewToString(HttpContext.RequestServices,
                        MVC.Views.Membership.Account.SignUp.AccountActivateEmail, emailModel);

                    if (emailSender is null)
                    	throw new ArgumentNullException(nameof(emailSender));

                    emailSender.Send(subject: emailSubject, body: emailBody, mailTo: email);

                    uow.Commit();
                    UserRetrieveService.RemoveCachedUser(Cache, userId, username);

                    return new ServiceResponse();
                }
            });
        }

        [HttpGet]
        public ActionResult Activate(string t,
            [FromServices] ISqlConnections sqlConnections)
        {
            using (var connection = sqlConnections.NewByKey("Default"))
            using (var uow = new UnitOfWork(connection))
            {
                int userId;
                try
                {
                    var bytes = HttpContext.RequestServices
                        .GetDataProtector("Activate").Unprotect(Convert.FromBase64String(t));

                    using (var ms = new MemoryStream(bytes))
                    using (var br = new BinaryReader(ms))
                    {
                        var dt = DateTime.FromBinary(br.ReadInt64());
                        if (dt < DateTime.UtcNow)
                            return Error(Texts.Validation.InvalidActivateToken.ToString(Localizer));

                        userId = br.ReadInt32();
                    }
                }
                catch (Exception)
                {
                    return Error(Texts.Validation.InvalidActivateToken.ToString(Localizer));
                }

                var user = uow.Connection.TryById<UserRow>(userId);
                if (user == null || user.IsActive != 0)
                    return Error(Texts.Validation.InvalidActivateToken.ToString(Localizer));

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = user.UserId.Value,
                    IsActive = 1
                });

                Cache.InvalidateOnCommit(uow, UserRow.Fields);
                uow.Commit();

                return new RedirectResult("~/Account/Login?activated=" + Uri.EscapeDataString(user.Email));
            }
        }
    }
}
