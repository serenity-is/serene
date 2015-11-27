
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
            return View(MVC.Views.Membership.Account.AccountLogin);
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
            return View(MVC.Views.Membership.Account.AccountChangePassword);
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
                    throw new ValidationError("PasswordConfirmMismatch", LocalText.Get("Validation.PasswordConfirm"));

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
            return View(MVC.Views.Membership.Account.AccountForgotPassword);
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
                    MVC.Views.Membership.Account.AccountResetPasswordEmail, emailModel);

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

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        [HttpGet]
        public ActionResult ResetPassword(string t)
        {
            int userId;
            try
            {
                using (var ms = new MemoryStream(MachineKey.Unprotect(Convert.FromBase64String(t), "ResetPassword")))
                using (var br = new BinaryReader(ms))
                {
                    var dt = DateTime.FromBinary(br.ReadInt64());
                    if (dt < DateTime.UtcNow)
                        return Error(Texts.Validation.InvalidResetToken);

                    userId = br.ReadInt32();
                }
            }
            catch (Exception)
            {
                return Error(Texts.Validation.InvalidResetToken);
            }

            using (var connection = SqlConnections.NewFor<UserRow>())
            {
                var user = connection.TryById<UserRow>(userId);
                if (user == null)
                    return Error(Texts.Validation.InvalidResetToken);
            }

            return View(MVC.Views.Membership.Account.AccountResetPassword, 
                new ResetPasswordModel { Token = t });
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ResetPassword(ResetPasswordRequest request)
        {
            return this.InTransaction("Default", uow =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Token))
                    throw new ArgumentNullException("token");

                int userId;
                using (var ms = new MemoryStream(MachineKey.Unprotect(
                    Convert.FromBase64String(request.Token), "ResetPassword")))
                using (var br = new BinaryReader(ms))
                {
                    var dt = DateTime.FromBinary(br.ReadInt64());
                    if (dt < DateTime.UtcNow)
                        throw new ValidationError(Texts.Validation.InvalidResetToken);

                    userId = br.ReadInt32();
                }

                UserRow user;
                using (var connection = SqlConnections.NewFor<UserRow>())
                {
                    user = connection.TryById<UserRow>(userId);
                    if (user == null)
                        throw new ValidationError(Texts.Validation.InvalidResetToken);
                }

                if (request.ConfirmPassword != request.NewPassword)
                    throw new ValidationError("PasswordConfirmMismatch", LocalText.Get("Validation.PasswordConfirm"));

                request.NewPassword = UserRepository.ValidatePassword(user.Username, request.NewPassword, false);

                var salt = Membership.GeneratePassword(5, 1);
                var hash = SiteMembershipProvider.ComputeSHA512(request.NewPassword + salt);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = user.UserId.Value,
                    PasswordSalt = salt,
                    PasswordHash = hash
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);

                return new ServiceResponse();
            });
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }
    }
}