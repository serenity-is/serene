
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System.Collections.Generic;

    public class EmployeeFormatter : ISlickFormatter, IInitializeColumn
    {
        public string Format(SlickFormatterContext ctx)
        {
            var text = Q.HtmlEncode(ctx.Value);

            if (string.IsNullOrEmpty(GenderProperty))
                return text;

            var gender = ctx.Item[GenderProperty] as Gender?;
            
            return "<span class='" + 
                (gender == Gender.Female ? "employee-symbol female" : "employee-symbol male") + 
                "'>" + text + "</span>";
        }

        [Option]
        public string GenderProperty { get; set; }

        public void InitializeColumn(SlickColumn column)
        {
            column.ReferencedFields = column.ReferencedFields ?? new List<string>();

            if (!string.IsNullOrEmpty(GenderProperty))
            {
                column.ReferencedFields.Add(GenderProperty);
                return;
            }
        }
    }
}