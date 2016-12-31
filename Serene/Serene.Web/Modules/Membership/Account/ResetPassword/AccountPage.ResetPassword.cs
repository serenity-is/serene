
namespace Serene.Membership.Pages
{
    using Administration.Entities;
    using Administration.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web.Providers;
    using System;
    using System.IO;
#if ASPNETCORE
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.DataProtection;
#else
    using System.Web.Mvc;
    using System.Web.Security;
#endif

    public partial class AccountController : Controller
    {
        [HttpGet]
        public ActionResult ResetPassword(string t)
        {
            int userId;
            try
            {
#if ASPNETCORE
                var bytes = HttpContext.RequestServices
                    .GetDataProtector("ResetPassword").Unprotect(Convert.FromBase64String(t));
#else
                var bytes = MachineKey.Unprotect(Convert.FromBase64String(t), "ResetPassword");
#endif
                using (var ms = new MemoryStream(bytes))
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

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.ResetPassword.AccountResetPassword_AdminLTE, new ResetPasswordModel { Token = t });
            else
                return View(MVC.Views.Membership.Account.ResetPassword.AccountResetPassword, new ResetPasswordModel { Token = t });

        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> ResetPassword(ResetPasswordRequest request)
        {
            return this.InTransaction("Default", uow =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Token))
                    throw new ArgumentNullException("token");

#if ASPNETCORE
                var bytes = HttpContext.RequestServices
                    .GetDataProtector("ResetPassword").Unprotect(Convert.FromBase64String(request.Token));
#else
                var bytes = MachineKey.Unprotect(Convert.FromBase64String(request.Token), "ResetPassword");
#endif

                int userId;
                using (var ms = new MemoryStream(bytes))
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


                string salt = null;
                var hash = UserRepository.GenerateHash(request.NewPassword, ref salt);
                UserRepository.CheckPublicDemo(user.UserId);

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
    }
}
