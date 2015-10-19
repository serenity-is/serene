
namespace Serene.Common
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;
    using System.Linq;

    [IdProperty("__id")]
    public abstract class GridEditorDialog<TEntity> : EntityDialog<TEntity>
        where TEntity: class, new()
    {
        public override void Destroy()
        {
            OnSave = null;
            OnDelete = null;
            base.Destroy();
        }

        protected override void UpdateInterface()
        {
            base.UpdateInterface();

            // apply changes button doesn't work properly with in-memory grids yet
            if (applyChangesButton != null)
                applyChangesButton.Hide();
        }

        protected override void SaveHandler(ServiceCallOptions options, Action<ServiceResponse> callback)
        {
            if (OnSave != null)
                OnSave(options, callback);
        }

        protected override void DeleteHandler(ServiceCallOptions<DeleteResponse> options, Action<DeleteResponse> callback)
        {
            if (OnDelete != null)
                OnDelete(options, callback);
        }

        public Action<ServiceCallOptions, Action<ServiceResponse>> OnSave { get; set; }
        public Action<ServiceCallOptions<DeleteResponse>, Action<DeleteResponse>> OnDelete { get; set; }
    }
}