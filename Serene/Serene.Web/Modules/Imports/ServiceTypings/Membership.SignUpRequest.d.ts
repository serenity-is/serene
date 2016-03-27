declare namespace Serene.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName: string;
        Email: string;
        Password: string;
    }
}
