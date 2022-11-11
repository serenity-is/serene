import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface RoleForm {
    RoleName: StringEditor;
}

export class RoleForm extends PrefixedContext {
    static formKey = 'Administration.Role';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!RoleForm.init)  {
            RoleForm.init = true;

            var w0 = StringEditor;

            initFormType(RoleForm, [
                'RoleName', w0
            ]);
        }
    }
}
