namespace Serene.Organization {
    export class ContactForm extends Serenity.PrefixedContext {
        static formKey = 'Organization.Contact';

    }

    export interface ContactForm {
        Title: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        IdentityNo: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }

    [['Title', () => Serenity.StringEditor], ['FirstName', () => Serenity.StringEditor], ['LastName', () => Serenity.StringEditor], ['Email', () => Serenity.EmailEditor], ['IdentityNo', () => Serenity.StringEditor], ['UserId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ContactForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

