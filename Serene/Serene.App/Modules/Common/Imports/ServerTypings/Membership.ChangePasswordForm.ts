namespace Serene.Membership {
    export class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ChangePassword';

    }

    export interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }

    [['OldPassword', () => Serenity.PasswordEditor], ['NewPassword', () => Serenity.PasswordEditor], ['ConfirmPassword', () => Serenity.PasswordEditor]].forEach(x => Object.defineProperty(ChangePasswordForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

