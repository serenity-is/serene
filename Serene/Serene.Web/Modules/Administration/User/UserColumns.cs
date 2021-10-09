using Serenity.ComponentModel;
using System;

namespace Serene.Administration.Columns
{
    [ColumnsScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserColumns
    {
        [EditLink, AlignRight, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        [Width(250)]
        public String Email { get; set; }
        [Width(100)]
        public String Source { get; set; }
    }
}
