import { ServiceRequest } from "@serenity-is/corelib/q";

export interface ChangePasswordRequest extends ServiceRequest {
    OldPassword?: string;
    NewPassword?: string;
    ConfirmPassword?: string;
}