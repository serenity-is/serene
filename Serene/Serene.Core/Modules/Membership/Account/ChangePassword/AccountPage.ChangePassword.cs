using Serene.Administration.Entities;
using Serene.Administration.Repositories;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System;
using Microsoft.AspNetCore.Mvc;
using Serene.Administration;

namespace Serene.Membership.Pages
{
    public partial class AccountController : Controller
    {
        [HttpGet, PageAuthorize]
        public ActionResult ChangePassword()
        {
            return View(MVC.Views.Membership.Account.ChangePassword.AccountChangePassword);
        }

        [HttpPost, JsonFilter, ServiceAuthorize]
        public Result<ServiceResponse> ChangePassword(ChangePasswordRequest request, 
            [FromServices] IUserPasswordValidator passwordValidator)
        {
            return this.InTransaction("Default", uow =>
            {
                if (request is null)
                    throw new ArgumentNullException(nameof(request));

                if (string.IsNullOrEmpty(request.OldPassword))
                    throw new ArgumentNullException("oldPassword");

                if (passwordValidator is null)
                	throw new ArgumentNullException(nameof(passwordValidator));

                var username = User.Identity?.Name;

                if (passwordValidator.Validate(ref username, request.OldPassword) != PasswordValidationResult.Valid)
                    throw new ValidationError("CurrentPasswordMismatch", Texts.Validation.CurrentPasswordMismatch.ToString(Localizer));

                if (request.ConfirmPassword != request.NewPassword)
                    throw new ValidationError("PasswordConfirmMismatch", Localizer.Get("Validation.PasswordConfirm"));

                request.NewPassword = UserRepository.ValidatePassword(request.NewPassword, Localizer);

                string salt = null;
                var hash = UserRepository.GenerateHash(request.NewPassword, ref salt);
                var userId = int.Parse(User.GetIdentifier());

                UserRepository.CheckPublicDemo(userId);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = userId,
                    PasswordSalt = salt,
                    PasswordHash = hash
                });

                Cache.InvalidateOnCommit(uow, UserRow.Fields);

                return new ServiceResponse();
            });
        }
    }
}
