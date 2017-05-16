namespace Serene.DialogUtils {
    export function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean) {
        element.bind('dialogbeforeclose', function (e) {
            if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                return;
            }

            e.preventDefault();
            Q.confirm('You have pending changes. Save them?',
                () => element.find('div.save-and-close-button').click(),
                {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
        });
    }
    
    export function readonlyOnChange(masterField: Serenity.Widget<any>, cascadeField: Serenity.Widget<any>, valueEnable: any): void {
        DialogUtils.conditionalReadOnly(masterField, cascadeField, valueEnable);
        masterField.change(e => { DialogUtils.conditionalReadOnly(masterField, cascadeField, valueEnable); });
    }

    export function conditionalReadOnly(masterField: Serenity.Widget<any>, cascadeField: Serenity.Widget<any>, valueEnable: any): void {
        if (Serenity.EditorUtils.getValue(masterField) == valueEnable)
            Serenity.EditorUtils.setReadOnly(cascadeField, false);
        else
            Serenity.EditorUtils.setReadOnly(cascadeField, true);
    }

}
