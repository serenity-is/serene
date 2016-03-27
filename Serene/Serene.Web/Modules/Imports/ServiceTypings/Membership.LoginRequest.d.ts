declare namespace Serene.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username: string;
        Password: string;
    }
}
