var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Serene;
(function (Serene) {
    var Northwind;
    (function (Northwind) {
        var D = Serenity.Decorators;
        var MyCustomerDialog = (function (_super) {
            __extends(MyCustomerDialog, _super);
            function MyCustomerDialog() {
                _super.apply(this, arguments);
            }
            MyCustomerDialog = __decorate([
                D.formKey("Northwind.Customer"),
                D.idProperty("ID"),
                D.nameProperty("CustomerID"),
                D.service("Northwind/Customer"),
                D.flexify(),
                D.maximizable()
            ], MyCustomerDialog);
            return MyCustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.MyCustomerDialog = MyCustomerDialog;
        var MyBoldFormatter = (function () {
            function MyBoldFormatter() {
            }
            MyBoldFormatter.prototype.format = function (ctx) {
                return "<b>" + Q.htmlEncode(ctx.value) + "</b>";
            };
            return MyBoldFormatter;
        }());
        Northwind.MyBoldFormatter = MyBoldFormatter;
    })(Northwind = Serene.Northwind || (Serene.Northwind = {}));
})(Serene || (Serene = {}));
