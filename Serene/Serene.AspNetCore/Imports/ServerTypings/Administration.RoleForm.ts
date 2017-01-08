namespace Serene.Administration {
    export class RoleForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Role';

    }

    export interface RoleForm {
        RoleName: Serenity.StringEditor;
    }

    [['RoleName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RoleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

