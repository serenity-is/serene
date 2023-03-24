import { ServiceRequest } from "@serenity-is/corelib/q";

export interface ResetPasswordRequest extends ServiceRequest {
    Token?: string;
    NewPassword?: string;
    ConfirmPassword?: string;
}