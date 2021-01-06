namespace Serene.Common {

    @Serenity.Decorators.registerFormatter()
    export class EnumSelectFormatter implements Slick.Formatter {
        constructor() {
            this.allowClear = true;
        }

        format(ctx: Slick.FormatterContext) {
            var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);

            var sb = "<select>";
            if (this.allowClear) {
                sb += '<option value="">';
                sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                sb += '</option>';
            }

            for (var x of Object.keys(enumType).filter(v => !isNaN(parseInt(v, 10)))) {
                sb += '<option value="' + x + '"';
                if (x == ctx.value)
                    sb += " selected";
                var name = enumType[x];
                sb += ">";
                sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                sb += "</option>";
            }

            sb += "</select>";

            return sb;
        }

        @Serenity.Decorators.option()
        public enumKey: string;

        @Serenity.Decorators.option()
        public allowClear: boolean;

        @Serenity.Decorators.option()
        public emptyItemText: string;
    }
}