import { ServiceRequest } from "@serenity-is/corelib/q";

export interface LoginRequest extends ServiceRequest {
    Username?: string;
    Password?: string;
}