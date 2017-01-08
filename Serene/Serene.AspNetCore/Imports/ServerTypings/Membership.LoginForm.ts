namespace Serene.Membership {
    export class LoginForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.Login';

    }

    export interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }

    [['Username', () => Serenity.StringEditor], ['Password', () => Serenity.PasswordEditor]].forEach(x => Object.defineProperty(LoginForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

