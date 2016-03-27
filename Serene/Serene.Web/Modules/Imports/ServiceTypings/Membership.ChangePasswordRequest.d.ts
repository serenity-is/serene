declare namespace Serene.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword: string;
        NewPassword: string;
        ConfirmPassword: string;
    }
}
