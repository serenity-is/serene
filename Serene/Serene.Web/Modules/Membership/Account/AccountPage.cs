
namespace Serene.Membership.Pages
{
    using Administration.Entities;
    using Administration.Repositories;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using Serenity.Web.Providers;
    using System;
    using System.IO;
    using System.Net.Mail;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Security;

    [RoutePrefix("Account"), Route("{action=index}")]
    public class AccountController : Controller
    {
        [HttpGet]
        public ActionResult Login()
        {
            ViewBag.HideLeftNavigation = true;
            return View("~/Modules/Membership/Account/AccountLogin.cshtml");
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;
                
                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                    return new ServiceResponse();

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        [HttpGet, Authorize]
        public ActionResult ChangePassword()
        {
            return View("~/Modules/Membership/Account/AccountChangePassword.cshtml");
        }

        [HttpPost, JsonFilter, ServiceAuthorize]
        public Result<ServiceResponse> ChangePassword(ChangePasswordRequest request)
        {
            return this.InTransaction("Default", uow =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.OldPassword))
                    throw new ArgumentNullException("oldPassword");

                var username = Authorization.Username;

                if (!Dependency.Resolve<IAuthenticationService>().Validate(ref username, request.OldPassword))
                    throw new ValidationError("CurrentPasswordMismatch", Texts.Validation.CurrentPasswordMismatch);

                if (request.ConfirmPassword != request.NewPassword)
                    throw new ValidationError("PasswordConfirmMismatch", Texts.Validation.PasswordConfirmMismatch);

                request.NewPassword = UserRepository.ValidatePassword(username, request.NewPassword, false);

                var salt = Membership.GeneratePassword(5, 1);
                var hash = SiteMembershipProvider.ComputeSHA512(request.NewPassword + salt);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = int.Parse(Authorization.UserId),
                    PasswordSalt = salt,
                    PasswordHash = hash
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);

                return new ServiceResponse();
            });
        }

        [HttpGet]
        public ActionResult ForgotPassword()
        {
            return View("~/Modules/Membership/Account/AccountForgotPassword.cshtml");
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
                using (var sw = new StreamWriter(ms))
                {
                    sw.Write(DateTime.UtcNow.AddHours(3));
                    sw.Write(user.UserId.Value);
                    sw.Flush();
                    bytes = ms.ToArray();
                }

                var token = Convert.ToBase64String(MachineKey.Protect(bytes, "ResetPassword"));

                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                    Request.Url.GetLeftPart(UriPartial.Authority) + VirtualPathUtility.ToAbsolute("~/");

                var resetLink = UriHelper.Combine(externalUrl, "Account/ResetPassword?t=");
                resetLink = resetLink + Uri.EscapeDataString(token);

                var emailModel = new ResetPasswordEmailModel();
                emailModel.Username = user.Username;
                emailModel.DisplayName = user.DisplayName;
                emailModel.ResetLink = resetLink;

                var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                var emailBody = TemplateHelper.RenderTemplate(
                    "~/Modules/Membership/Account/AccountResetPasswordEmail.cshtml", emailModel);

                var message = new MailMessage();
                message.To.Add(user.Email);
                message.Subject = emailSubject;
                message.Body = emailBody;
                message.IsBodyHtml = true;

                var client = new SmtpClient();

                if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                    string.IsNullOrEmpty(client.PickupDirectoryLocation))
                {
                    var pickupPath = Server.MapPath("~/App_Data");
                    pickupPath = Path.Combine(pickupPath, "Mail");
                    Directory.CreateDirectory(pickupPath);
                    client.PickupDirectoryLocation = pickupPath;
                }

                client.Send(message);

                return new ServiceResponse();
            });
        }

        [HttpGet]
        public ActionResult ResetPassword(string t)
        {
            if (string.IsNullOrEmpty(t))
                return new RedirectResult("~/");

            var token = MachineKey.Unprotect(Convert.FromBase64String(t), "ResetPassword");

            return View("~/Modules/Membership/Account/AccountResetPassword.cshtml");
        }

        private Result<ServiceResponse> InTransaction(string v, Func<IUnitOfWork, ServiceResponse> p)
        {
            throw new NotImplementedException();
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ResetPassword(ResetPasswordRequest request)
        {
            return this.InTransaction("Default", uow =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Token))
                    throw new ArgumentNullException("token");

                var username = Authorization.Username;

                //if (!Dependency.Resolve<IAuthenticationService>().Validate(ref username, request.OldPassword))
                //    throw new ValidationError("CurrentPasswordMismatch", Texts.Validation.CurrentPasswordMismatch);

                if (request.ConfirmPassword != request.NewPassword)
                    throw new ValidationError("PasswordConfirmMismatch", Texts.Validation.PasswordConfirmMismatch);

                request.NewPassword = UserRepository.ValidatePassword(username, request.NewPassword, false);

                var salt = Membership.GeneratePassword(5, 1);
                var hash = SiteMembershipProvider.ComputeSHA512(request.NewPassword + salt);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = int.Parse(Authorization.UserId),
                    PasswordSalt = salt,
                    PasswordHash = hash
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);

                return new ServiceResponse();
            });
        }

        [HttpGet]
        public ActionResult Signup()
        {
            return View("~/Modules/Membership/Account/AccountSignup.cshtml");
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }
    }
}