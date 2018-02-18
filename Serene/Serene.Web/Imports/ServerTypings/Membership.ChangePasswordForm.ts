namespace Serene.Membership {
    export interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    export class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ChangePassword';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChangePasswordForm.init)  {
                ChangePasswordForm.init = true;

                var s = Serenity;
                var w0 = s.PasswordEditor;

                Q.initFormType(ChangePasswordForm, [
                    'OldPassword', w0,
                    'NewPassword', w0,
                    'ConfirmPassword', w0
                ]);
            }
        }
    }
}

