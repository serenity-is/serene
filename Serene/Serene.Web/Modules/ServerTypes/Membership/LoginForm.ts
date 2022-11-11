import { StringEditor, PasswordEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface LoginForm {
    Username: StringEditor;
    Password: PasswordEditor;
}

export class LoginForm extends PrefixedContext {
    static formKey = 'Membership.Login';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LoginForm.init)  {
            LoginForm.init = true;

            var w0 = StringEditor;
            var w1 = PasswordEditor;

            initFormType(LoginForm, [
                'Username', w0,
                'Password', w1
            ]);
        }
    }
}
