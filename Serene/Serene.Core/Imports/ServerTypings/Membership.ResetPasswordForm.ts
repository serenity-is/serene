namespace Serene.Membership {
    export interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    export class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ResetPassword';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResetPasswordForm.init)  {
                ResetPasswordForm.init = true;

                var s = Serenity;
                var w0 = s.PasswordEditor;

                Q.initFormType(ResetPasswordForm, [
                    'NewPassword', w0,
                    'ConfirmPassword', w0
                ]);
            }
        }
    }
}
