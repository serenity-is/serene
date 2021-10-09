namespace Serene.Administration {
    export interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EmailEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.PasswordEditor;

                Q.initFormType(UserForm, [
                    'Username', w0,
                    'DisplayName', w0,
                    'Email', w1,
                    'UserImage', w2,
                    'Password', w3,
                    'PasswordConfirm', w3,
                    'Source', w0
                ]);
            }
        }
    }
}
