namespace Serene.Membership {
    export class SignUpForm extends Serenity.PrefixedContext {
        static formKey = 'Membership.SignUp';

    }

    export interface SignUpForm {
        DisplayName(): Serenity.StringEditor;
        Email(): Serenity.EmailEditor;
        ConfirmEmail(): Serenity.EmailEditor;
        Password(): Serenity.PasswordEditor;
        ConfirmPassword(): Serenity.PasswordEditor;
    }

    [['DisplayName', Serenity.StringEditor], ['Email', Serenity.EmailEditor], ['ConfirmEmail', Serenity.EmailEditor], ['Password', Serenity.PasswordEditor], ['ConfirmPassword', Serenity.PasswordEditor]].forEach(x => SignUpForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

