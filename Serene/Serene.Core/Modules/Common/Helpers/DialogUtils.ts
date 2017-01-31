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
}
