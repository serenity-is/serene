import { StringEditor, EmailAddressEditor, PasswordEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface SignUpForm {
    DisplayName: StringEditor;
    Email: EmailAddressEditor;
    ConfirmEmail: EmailAddressEditor;
    Password: PasswordEditor;
    ConfirmPassword: PasswordEditor;
}

export class SignUpForm extends PrefixedContext {
    static formKey = 'Membership.SignUp';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SignUpForm.init)  {
            SignUpForm.init = true;

            var w0 = StringEditor;
            var w1 = EmailAddressEditor;
            var w2 = PasswordEditor;

            initFormType(SignUpForm, [
                'DisplayName', w0,
                'Email', w1,
                'ConfirmEmail', w1,
                'Password', w2,
                'ConfirmPassword', w2
            ]);
        }
    }
}
