
using jQueryApi;
using jQueryApi.UI;
using jQueryApi.UI.Widgets;
using Serenity;
using System;
using System.Runtime.CompilerServices;

namespace Serene
{
    [Imported]
    public static class DialogUtils
    {
        public static void PendingChangesConfirmation(jQueryObject element, 
            Func<bool> hasPendingChanges)
        {
            element.Bind("dialogbeforeclose", e =>
            {
                if (!e.HasOriginalEvent() || !hasPendingChanges())
                    return;

                e.PreventDefault();

                Q.Confirm("You have pending changes. Save them?", () =>
                {
                    element.Find("div.save-and-close-button").Click();
                }, new ConfirmOptions
                {
                    OnNo = () =>
                    {
                        element.Dialog().Close();
                    }
                });
            });
        }
    }
}