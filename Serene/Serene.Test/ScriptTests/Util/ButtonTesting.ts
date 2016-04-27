namespace Serene.ButtonTesting {
    export function assertEnabled(button: JQuery, klass: string) {
        QUnit.assert.ok(
            button.hasClass(klass) &&
            !button.hasClass('disabled'),
            'button with class ' + klass + ' is enabled.');
    }

    export function assertDisabled(button: JQuery, klass: string) {
        QUnit.assert.ok(
            button.hasClass(klass) &&
            button.hasClass('disabled'),
            'button with class ' + klass + ' is disabled.');
    }
}