declare namespace Serene.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token: string;
        NewPassword: string;
        ConfirmPassword: string;
    }
}
