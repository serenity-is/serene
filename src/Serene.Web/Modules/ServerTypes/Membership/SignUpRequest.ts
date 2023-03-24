import { ServiceRequest } from "@serenity-is/corelib/q";

export interface SignUpRequest extends ServiceRequest {
    DisplayName?: string;
    Email?: string;
    Password?: string;
}