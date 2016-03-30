namespace Serene.Membership {
    export class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ForgotPassword';

    }

    export interface ForgotPasswordForm extends Serenity.PrefixedContext {
        Email();
    }

    [['Email', Serenity.EmailEditor]].forEach(x => ForgotPasswordForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

