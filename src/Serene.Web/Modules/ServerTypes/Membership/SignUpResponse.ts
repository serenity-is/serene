import { ServiceResponse } from "@serenity-is/corelib/q";

export interface SignUpResponse extends ServiceResponse {
    DemoActivationLink?: string;
}