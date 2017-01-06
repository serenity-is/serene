namespace Serene.Membership {
    export class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ResetPassword';

    }

    export interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    [['NewPassword', () => Serenity.PasswordEditor], ['ConfirmPassword', () => Serenity.PasswordEditor]].forEach(x => Object.defineProperty(ResetPasswordForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

