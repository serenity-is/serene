using Serene.Administration.Entities;
using Serene.Administration.Repositories;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web.Providers;
using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.DataProtection;

namespace Serene.Membership.Pages
{
    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult ResetPassword(string t, [FromServices] ISqlConnections sqlConnections)
        {
            int userId;
            try
            {
                var bytes = HttpContext.RequestServices
                    .GetDataProtector("ResetPassword").Unprotect(Convert.FromBase64String(t));

                using (var ms = new MemoryStream(bytes))
                using (var br = new BinaryReader(ms))
                {
                    var dt = DateTime.FromBinary(br.ReadInt64());
                    if (dt < DateTime.UtcNow)
                        return Error(Texts.Validation.InvalidResetToken.ToString(Localizer));

                    userId = br.ReadInt32();
                }
            }
            catch (Exception)
            {
                return Error(Texts.Validation.InvalidResetToken.ToString(Localizer));
            }

            if (sqlConnections is null)
            	throw new ArgumentNullException(nameof(sqlConnections));

            using (var connection = sqlConnections.NewFor<UserRow>())
            {
                var user = connection.TryById<UserRow>(userId);
                if (user == null)
                    return Error(Texts.Validation.InvalidResetToken.ToString(Localizer));
            }

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.ResetPassword.AccountResetPassword_AdminLTE, new ResetPasswordModel { Token = t });
            else
                return View(MVC.Views.Membership.Account.ResetPassword.AccountResetPassword, new ResetPasswordModel { Token = t });

        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ResetPassword(ResetPasswordRequest request, [FromServices] ISqlConnections sqlConnections)
        {
            return this.InTransaction("Default", uow =>
            {
                if (request is null)
                    throw new ArgumentNullException(nameof(request));

                if (string.IsNullOrEmpty(request.Token))
                    throw new ArgumentNullException("token");

                var bytes = HttpContext.RequestServices
                    .GetDataProtector("ResetPassword").Unprotect(Convert.FromBase64String(request.Token));

                int userId;
                using (var ms = new MemoryStream(bytes))
                using (var br = new BinaryReader(ms))
                {
                    var dt = DateTime.FromBinary(br.ReadInt64());
                    if (dt < DateTime.UtcNow)
                        throw new ValidationError(Texts.Validation.InvalidResetToken.ToString(Localizer));

                    userId = br.ReadInt32();
                }

                UserRow user;
                if (sqlConnections is null)
                	throw new ArgumentNullException(nameof(sqlConnections));

                using (var connection = sqlConnections.NewFor<UserRow>())
                {
                    user = connection.TryById<UserRow>(userId);
                    if (user == null)
                        throw new ValidationError(Texts.Validation.InvalidResetToken.ToString(Localizer));
                }

                if (request.ConfirmPassword != request.NewPassword)
                    throw new ValidationError("PasswordConfirmMismatch", Localizer.Get("Validation.PasswordConfirm"));

                request.NewPassword = UserRepository.ValidatePassword(request.NewPassword, Localizer);


                string salt = null;
                var hash = UserRepository.GenerateHash(request.NewPassword, ref salt);
                UserRepository.CheckPublicDemo(user.UserId);

                uow.Connection.UpdateById(new UserRow
                {
                    UserId = user.UserId.Value,
                    PasswordSalt = salt,
                    PasswordHash = hash
                });

                Cache.InvalidateOnCommit(uow, UserRow.Fields);

                return new ServiceResponse();
            });
        }
    }
}
