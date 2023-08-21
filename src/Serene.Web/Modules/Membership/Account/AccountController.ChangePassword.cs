using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Serenity;
using Serenity.Data;
using Serenity.Extensions;
using Serenity.Services;
using Serenity.Web;
using Serene.Administration;
using System;
using System.Globalization;
using Serenity.Abstractions;
using Serenity.ComponentModel;

namespace Serene.Membership.Pages
{
    public partial class AccountController : Controller
    {
        [HttpGet, PageAuthorize]
        public ActionResult ChangePassword()
        {
            return View(MVC.Views.Membership.Account.ChangePassword.ChangePasswordPage);
        }

        [HttpPost, JsonRequest, ServiceAuthorize]
        public Result<ServiceResponse> ChangePassword(ChangePasswordRequest request, 
            [FromServices] IUserPasswordValidator passwordValidator,
            [FromServices] IOptions<EnvironmentSettings> environmentOptions)
        {
            return this.InTransaction("Default", uow =>
            {
                if (request is null)
                    throw new ArgumentNullException(nameof(request));

                if (string.IsNullOrEmpty(request.OldPassword))
                    throw new ArgumentNullException(nameof(request.OldPassword));

                if (passwordValidator is null)
                    throw new ArgumentNullException(nameof(passwordValidator));

                var username = User.Identity?.Name;

                if (passwordValidator.Validate(ref username, request.OldPassword) != PasswordValidationResult.Valid)
                    throw new ValidationError("CurrentPasswordMismatch", Texts.Validation.CurrentPasswordMismatch.ToString(Localizer));

                if (request.ConfirmPassword != request.NewPassword)
                    throw new ValidationError("PasswordConfirmMismatch", Localizer.Get("Validation.PasswordConfirm"));

                request.NewPassword = UserHelper.ValidatePassword(request.NewPassword, Localizer);

                string salt = null;
                var hash = UserHelper.GenerateHash(request.NewPassword, ref salt);
                var userId = int.Parse(User.GetIdentifier(), CultureInfo.InvariantCulture);

                environmentOptions.CheckPublicDemo(userId);

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
