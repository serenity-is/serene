using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Northwind
{
    [Imported, Serializable, PreserveMemberCase]
    public partial class CategoryLangRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "CategoryName";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.CategoryLang";

        public Int32? Id { get; set; }
        public Int32? CategoryId { get; set; }
        public Int32? LanguageId { get; set; }
        public String CategoryName { get; set; }
        public String Description { get; set; }

        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string CategoryId = "CategoryId";
            [InlineConstant] public const string LanguageId = "LanguageId";
            [InlineConstant] public const string CategoryName = "CategoryName";
            [InlineConstant] public const string Description = "Description";
        }
    }
}

