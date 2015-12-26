
namespace Serenity
{
    using jQueryApi;
    using System.ComponentModel;

    [Editor, DisplayName("Html Content (Basic Set)"), OptionsType(typeof(HtmlContentEditorOptions))]
    [Element("<textarea />")]
    public class HtmlBasicContentEditor : HtmlContentEditor, IStringValue
    {
        public HtmlBasicContentEditor(jQueryObject textArea, HtmlContentEditorOptions opt)
            : base(textArea, opt)
        {
        }

        protected override CKEditorConfig GetConfig()
        {
            var config = base.GetConfig();
            config.RemoveButtons += ",Cut,Copy,Paste,BulletedList,NumberedList,Indent,Outdent," + 
                "SpecialChar,Subscript,Superscript,Styles,PasteText,PasteFromWord,Strike,Link," + 
                "Unlink,CreatePlaceholder,Image,Table,HorizontalRule,Source,Maximize,Format,Font," + 
                "FontSize,Anchor,Blockquote,CreatePlaceholder,BGColor,JustifyLeft,JustifyCenter," + 
                "JustifyRight,JustifyBlock,Superscript,RemoveFormat";
            config.RemovePlugins += ",elementspath";
            return config;
        }
    }
}