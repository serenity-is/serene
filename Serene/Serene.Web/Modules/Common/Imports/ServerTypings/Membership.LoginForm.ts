namespace Serene.Membership {
    export class LoginForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.Login';

    }

    export interface LoginForm extends Serenity.PrefixedContext {
        Username();
        Password();
    }

    [['Username', Serenity.StringEditor], ['Password', Serenity.PasswordEditor]].forEach(x => LoginForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

