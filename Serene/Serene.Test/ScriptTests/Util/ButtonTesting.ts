namespace Serene {
    export class ButtonTesting {

        constructor(private assert: Assert) {
        }

        assertEnabled(button: JQuery, klass: string) {
            this.assert.ok(
                button.hasClass(klass) &&
                !button.hasClass('disabled'),
                'button with class ' + klass + ' is enabled.');
        }

        assertDisabled(button: JQuery, klass: string) {
            this.assert.ok(
                button.hasClass(klass) &&
                button.hasClass('disabled'),
                'button with class ' + klass + ' is disabled.');
        }
    }
}