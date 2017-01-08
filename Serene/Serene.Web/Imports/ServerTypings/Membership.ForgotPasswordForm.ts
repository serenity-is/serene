namespace Serene.Membership {
    export class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.ForgotPassword';

    }

    export interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }

    [['Email', () => Serenity.EmailEditor]].forEach(x => Object.defineProperty(ForgotPasswordForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

