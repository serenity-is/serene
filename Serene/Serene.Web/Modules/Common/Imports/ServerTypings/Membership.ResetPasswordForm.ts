namespace Serene.Membership {
    export class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ResetPassword';

    }

    export interface ResetPasswordForm extends Serenity.PrefixedContext {
        NewPassword();
        ConfirmPassword();
    }

    [['NewPassword', Serenity.PasswordEditor], ['ConfirmPassword', Serenity.PasswordEditor]].forEach(x => ResetPasswordForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

