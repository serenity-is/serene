namespace Serene.Northwind {

    @Serenity.Decorators.registerEditor()
    export class PhoneEditor extends Serenity.StringEditor {

        constructor(input: JQuery) {
            super(input);

            this.addValidationRule(this.uniqueName, e => {
                var value = Q.trimToNull(this.get_value());
                if (value == null) {
                    return null;
                }
                return PhoneEditor.validate(value, this.multiple);
            });

            input.bind('change', e => {
                if (!Serenity.WX.hasOriginalEvent(e)) {
                    return;
                }
                this.formatValue();
            });

            input.bind('blur', e => {
                if (this.element.hasClass('valid')) {
                    this.formatValue();
                }
            });
        }

        protected formatValue(): void {
            this.element.val(this.getFormattedValue());
        }

        protected getFormattedValue(): string {
            var value = this.element.val();
            if (this.multiple) {
                return PhoneEditor.formatMulti(value, PhoneEditor.formatPhone);
            }
            return PhoneEditor.formatPhone(value);
        }

        @Serenity.Decorators.option()
        public multiple: boolean;

        get_value() {
            return this.getFormattedValue();
        }

        @Serenity.Decorators.option()
        set_value(value: string) {
            this.element.val(value);
        }

        static validate(phone: string, isMultiple: boolean) {
            var valid = (isMultiple ? PhoneEditor.isValidMulti(phone, PhoneEditor.isValidPhone) : PhoneEditor.isValidPhone(phone));
            if (valid) {
                return null;
            }
            return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
        }

        static isValidPhone(phone: string) {
            if (Q.isEmptyOrNull(phone)) {
                return false;
            }
            phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
            if (phone.length < 10) {
                return false;
            }

            if (Q.startsWith(phone, '0')) {
                phone = phone.substring(1);
            }

            if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                phone = phone.substr(1, 3) + phone.substring(5);
            }

            if (phone.length !== 10) {
                return false;
            }

            if (Q.startsWith(phone, '0')) {
                return false;
            }

            for (var i = 0; i < phone.length; i++) {
                var c = phone.charAt(i);
                if (c < '0' || c > '9') {
                    return false;
                }
            }

            return true;
        }

        static formatPhone(phone) {
            if (!PhoneEditor.isValidPhone(phone)) {
                return phone;
            }
            phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
            if (Q.startsWith(phone, '0')) {
                phone = phone.substring(1);
            }
            phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
            return phone;
        }

        static formatMulti(phone: string, format: (s: string) => string) {
            var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
            var result = '';
            for (var x of phones) {
                var s = Q.trimToNull(x);
                if (s == null) {
                    continue;
                }
                if (result.length > 0) {
                    result += ', ';
                }
                result += format(s);
            }
            return result;
        }

        static isValidMulti(phone: string, check: (s: string) => boolean) {
            if (Q.isEmptyOrNull(phone)) {
                return false;
            }
            var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
            var anyValid = false;
            for (var $t1 = 0; $t1 < phones.length; $t1++) {
                var x = phones[$t1];
                var s = Q.trimToNull(x);
                if (s == null) {
                    continue;
                }
                if (!check(s)) {
                    return false;
                }
                anyValid = true;
            }
            if (!anyValid) {
                return false;
            }
            return true;
        }
    }
}