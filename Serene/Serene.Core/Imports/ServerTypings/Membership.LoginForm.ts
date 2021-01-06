namespace Serene.Membership {
    export interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }

    export class LoginForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.Login';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LoginForm.init)  {
                LoginForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.PasswordEditor;

                Q.initFormType(LoginForm, [
                    'Username', w0,
                    'Password', w1
                ]);
            }
        }
    }
}
