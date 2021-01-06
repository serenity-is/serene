
namespace Serene {

    /**
     * This is an editor widget but it only displays a text, not edits it.
     *  
     */
    @Serenity.Decorators.element("<div/>")
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions>
        implements Serenity.ISetEditValue {

        private value: string;

        constructor(container: JQuery, options: StaticTextBlockOptions) {
            super(container, options);

            // hide the caption label for this editor if in a form. ugly hack
            if (this.options.hideLabel)
                this.element.closest('.field').find('.caption').hide();

            this.updateElementContent();
        }

        private updateElementContent() {
            var text = Q.coalesce(this.options.text, this.value);

            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);

            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        }

        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        public setEditValue(source: any, property: Serenity.PropertyItem) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        }
    }

    export interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}