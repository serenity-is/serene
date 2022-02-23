namespace Serene.Membership {
    export interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    export class SignUpForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.SignUp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SignUpForm.init)  {
                SignUpForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailAddressEditor;
                var w2 = s.PasswordEditor;

                Q.initFormType(SignUpForm, [
                    'DisplayName', w0,
                    'Email', w1,
                    'ConfirmEmail', w1,
                    'Password', w2,
                    'ConfirmPassword', w2
                ]);
            }
        }
    }
}
