namespace Serene.Administration {
    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';

    }

    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }

    [['Username', Serenity.StringEditor], ['DisplayName', Serenity.StringEditor], ['Email', Serenity.EmailEditor], ['Password', Serenity.PasswordEditor], ['PasswordConfirm', Serenity.PasswordEditor], ['Source', Serenity.StringEditor]].forEach(x => Object.defineProperty(UserForm.prototype, <string>x[0], { get: function () { return this.w(x[0], x[1]); }, enumerable: true, configurable: true }));
}

