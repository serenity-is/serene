namespace Serene.Membership {
    export interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string
        Email?: string
        Password?: string
    }
}

