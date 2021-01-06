namespace Serene.BasicSamples.DialogBoxes {

    export function initializePage() {
        confirmDialogButtons();
        confirmWithCustomTitle();
        information();
        warning();
        alert();
        alertWithHtmlContent();
    }

    function confirmDialogButtons() {

        // here we demonstrate how you can detect which button user has clicked
        // second parameter is Yes handler and it is called only when user clicks Yes.
        // third parameter has some additional options, that you should only use when needed

        $('#ConfirmDialogButtons').click(() => {
            Q.confirm(
                "Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!",
                () => {
                    Q.notifySuccess("You clicked YES. Great!");
                },
                {
                    onNo: () => {
                        Q.notifyInfo("You clicked NO. Why?");
                    },
                    onCancel: () => {
                        Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                    }
                });
        });
    }

    function confirmWithCustomTitle() {

        $('#ConfirmWithCustomTitle').click(() => {
            Q.confirm(
                "This confirmation has a custom title",
                () => {
                    Q.notifySuccess("Allright!");
                },
                {
                    title: 'Some Custom Confirmation Title'
                });
        });
    }

    function information() {

        $('#Information').click(() => {
            Q.information(
                "What a nice day",
                () => {
                    Q.notifySuccess("No problem!");
                });
        });
    }

    function warning() {

        $('#Warning').click(() => {
            Q.warning("Hey, be careful!");
        });
    }

    function alert() {

        $('#Alert').click(() => {
            Q.alert("Houston, we got a problem!");
        });
    }

    function alertWithHtmlContent() {
        $('#AlertWithHtmlContent').click(() => {
            Q.alert("<h4>Here is some HTML content!</h4>" +
                "<ul><li>Item 1</li><li>Item 2</li >" +
                "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                htmlEncode: false
            });
        });

    }

}