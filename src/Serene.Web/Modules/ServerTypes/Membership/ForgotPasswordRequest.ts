import { ServiceRequest } from "@serenity-is/corelib/q";

export interface ForgotPasswordRequest extends ServiceRequest {
    Email?: string;
}