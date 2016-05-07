namespace Serene.Common
{
    using jQueryApi;
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported, IncludeGenericArguments(false), ScriptName("GridEditorBase")]
    public abstract class GridEditorBase<TEntity> : EntityGrid<TEntity, object>
        where TEntity: class, new()
    {
        public GridEditorBase(jQueryObject container)
            : base(container)
        {
        }
    }
}

/* 
This class has been ported to TypeScript. See GridEditorBase.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene.Common
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Runtime.CompilerServices;

    [Element("<div/>"), Editor, IdProperty("__id"), IncludeGenericArguments(false)]
    public abstract class GridEditorBase<TEntity> : EntityGrid<TEntity>, ISetEditValue, IGetEditValue
        where TEntity : class, new()
    {
        private int nextId = 1;

        public GridEditorBase(jQueryObject container)
            : base(container)
        {
        }

        protected Int32? ID(TEntity entity)
        {
            return entity.As<dynamic>().__id;
        }

        protected virtual void Save(ServiceCallOptions opt, Action<ServiceResponse> callback)
        {
            var request = opt.Request.As<SaveRequest<TEntity>>();
            var row = Q.DeepClone(request.Entity);
            int? id = row.As<dynamic>().__id;
            if (id == null)
                row.As<dynamic>().__id = nextId++;

            if (!ValidateEntity(row, id))
                return;

            var items = view.GetItems().Clone();

            if (id == null)
                items.Add(row);
            else
            {
                var index = items.IndexOf(x => ID(x) == id.Value);
                items[index] = Q.DeepExtend<TEntity>(new object().As<TEntity>(), items[index], row);
            }

            SetEntities(items);
            callback(new ServiceResponse());
        }

        protected virtual bool DeleteEntity(Int32 id)
        {
            view.DeleteItem(id);
            return true;
        }

        protected virtual bool ValidateEntity(TEntity row, Int32? id)
        {
            return true;
        }

        protected virtual void SetEntities(List<TEntity> items)
        {
            view.SetItems(items, true);
        }

        protected virtual TEntity GetNewEntity()
        {
            return new object().As<TEntity>();
        }

        protected override List<ToolButton> GetButtons()
        {
            return new List<ToolButton>
            {
                new ToolButton
                {
                    Title = GetAddButtonCaption(),
                    CssClass = "add-button",
                    OnClick = delegate
                    {
                        CreateEntityDialog(GetItemType(), dlg =>
                        {
                            var dialog = (GridEditorDialog<TEntity>)dlg;
                            dialog.OnSave = Save;
                            dialog.LoadEntityAndOpenDialog(GetNewEntity());
                        });
                    }
                }
            };
        }

        protected override void EditItem(object entityOrId)
        {
            var id = entityOrId.ToInt32().Value;
            var item = view.GetItemById(id);
            CreateEntityDialog(GetItemType(), dlg =>
            {
                var dialog = (GridEditorDialog<TEntity>)dlg;

                dialog.OnDelete = (opt, callback) => {
                    if (!DeleteEntity(id))
                        return;

                    callback(new DeleteResponse());
                };

                dialog.OnSave = Save;
                dialog.LoadEntityAndOpenDialog(item);
            });
        }

        public void GetEditValue(PropertyItem property, dynamic target)
        {
            target[property.Name] = Value;
        }

        public void SetEditValue(dynamic source, PropertyItem property)
        {
            Value = source[property.Name];
        }

        public List<TEntity> Value
        {
            get
            {
                return view.GetItems().Select(x => {
                    var y = Q.DeepClone(x);
                    Script.Delete(y, "__id");
                    return y;
                }).ToList();
            }
            set
            {
                view.SetItems((value ?? new List<TEntity>()).Select(x => {
                    var y = Q.DeepClone(x);
                    y.As<dynamic>().__id = nextId++;
                    return y;
                }).ToList(), true);
            }
        }

        protected override bool GetGridCanLoad() { return false; }
        protected override bool UsePager() { return false; }
        protected override string GetInitialTitle() { return null; }
        protected override void CreateQuickSearchInput() {}
    }
}
*/