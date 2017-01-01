
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
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
#else
    using System.Web.Mvc;
    using System.Web.Security;
#endif

    public partial class AccountController : Controller
    {
        [HttpGet, PageAuthorize]
        public ActionResult ChangePassword()
        {
            return View(MVC.Views.Membership.Account.ChangePassword.AccountChangePassword);
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

                string salt = null;
                var hash = UserRepository.GenerateHash(request.NewPassword, ref salt);
                var userId = int.Parse(Authorization.UserId);

                UserRepository.CheckPublicDemo(userId);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = userId,
                    PasswordSalt = salt,
                    PasswordHash = hash
                });

                BatchGenerationUpdater.OnCommit(uow, UserRow.Fields.GenerationKey);

                return new ServiceResponse();
            });
        }
    }
}
