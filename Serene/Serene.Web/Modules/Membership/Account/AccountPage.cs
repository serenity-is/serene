
namespace Serene.Membership.Pages
{
    using Administration.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Abstractions;
    using Serenity.Services;
    using Serenity.Web.Providers;
    using System;
    using System.Web.Mvc;
    using System.Web.Security;
    using Administration.Entities;

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

        [HttpGet, Authorize]
        public ActionResult ForgotPassword()
        {
            return View("~/Modules/Membership/Account/AccountForgotPassword.cshtml");
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