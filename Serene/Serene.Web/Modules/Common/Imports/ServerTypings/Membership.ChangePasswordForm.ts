namespace Serene.Membership {
    export class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ChangePassword';

    }

    export interface ChangePasswordForm extends Serenity.PrefixedContext {
        OldPassword(): Serenity.PasswordEditor;
        NewPassword(): Serenity.PasswordEditor;
        ConfirmPassword(): Serenity.PasswordEditor;
    }

    [['OldPassword', Serenity.PasswordEditor], ['NewPassword', Serenity.PasswordEditor], ['ConfirmPassword', Serenity.PasswordEditor]].forEach(x => ChangePasswordForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

