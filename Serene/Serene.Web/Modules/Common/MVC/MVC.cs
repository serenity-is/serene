using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class AdminLTE
        {
            public const string Calendar = "~/Modules/AdminLTE/Calendar.cshtml";
            public static class Charts
            {
                public const string ChartJS = "~/Modules/AdminLTE/Charts/ChartJS.cshtml";
                public const string Flot = "~/Modules/AdminLTE/Charts/Flot.cshtml";
                public const string InlineCharts = "~/Modules/AdminLTE/Charts/InlineCharts.cshtml";
                public const string Morris = "~/Modules/AdminLTE/Charts/Morris.cshtml";
            }
            public const string DashboardV2 = "~/Modules/AdminLTE/DashboardV2.cshtml";
            public static class Examples
            {
                public const string BlankPage = "~/Modules/AdminLTE/Examples/BlankPage.cshtml";
                public const string Error404 = "~/Modules/AdminLTE/Examples/Error404.cshtml";
                public const string Error500 = "~/Modules/AdminLTE/Examples/Error500.cshtml";
                public const string Invoice = "~/Modules/AdminLTE/Examples/Invoice.cshtml";
                public const string InvoicePrint = "~/Modules/AdminLTE/Examples/InvoicePrint.cshtml";
                public const string Lockscreen = "~/Modules/AdminLTE/Examples/Lockscreen.cshtml";
                public const string Login = "~/Modules/AdminLTE/Examples/Login.cshtml";
                public const string PacePage = "~/Modules/AdminLTE/Examples/PacePage.cshtml";
                public const string Profile = "~/Modules/AdminLTE/Examples/Profile.cshtml";
                public const string Register = "~/Modules/AdminLTE/Examples/Register.cshtml";
            }

            public static class Forms
            {
                public const string AdvancedElements = "~/Modules/AdminLTE/Forms/AdvancedElements.cshtml";
                public const string GeneralElements = "~/Modules/AdminLTE/Forms/GeneralElements.cshtml";
                public const string TextEditors = "~/Modules/AdminLTE/Forms/TextEditors.cshtml";
            }

            public static class Mailbox
            {
                public const string Compose = "~/Modules/AdminLTE/Mailbox/Compose.cshtml";
                public const string Inbox = "~/Modules/AdminLTE/Mailbox/Inbox.cshtml";
                public const string Read = "~/Modules/AdminLTE/Mailbox/Read.cshtml";
            }

            public static class Tables
            {
                public const string DataTables = "~/Modules/AdminLTE/Tables/DataTables.cshtml";
                public const string SimpleTables = "~/Modules/AdminLTE/Tables/SimpleTables.cshtml";
            }

            public static class UIElements
            {
                public const string Buttons = "~/Modules/AdminLTE/UIElements/Buttons.cshtml";
                public const string General = "~/Modules/AdminLTE/UIElements/General.cshtml";
                public const string Icons = "~/Modules/AdminLTE/UIElements/Icons.cshtml";
                public const string Modals = "~/Modules/AdminLTE/UIElements/Modals.cshtml";
                public const string Sliders = "~/Modules/AdminLTE/UIElements/Sliders.cshtml";
                public const string Timeline = "~/Modules/AdminLTE/UIElements/Timeline.cshtml";
            }
            public const string Widgets = "~/Modules/AdminLTE/Widgets.cshtml";
        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                }
            }

        }

        public static class Northwind
        {
            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Northwind/Category/CategoryIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Northwind/Customer/CustomerIndex.cshtml";
            }

            public static class CustomerCustomerDemo
            {
                public const string CustomerCustomerDemoIndex = "~/Modules/Northwind/CustomerCustomerDemo/CustomerCustomerDemoIndex.cshtml";
            }

            public static class CustomerDemographic
            {
                public const string CustomerDemographicIndex = "~/Modules/Northwind/CustomerDemographic/CustomerDemographicIndex.cshtml";
            }

            public static class Employee
            {
                public const string EmployeeIndex = "~/Modules/Northwind/Employee/EmployeeIndex.cshtml";
            }

            public static class EmployeeTerritory
            {
                public const string EmployeeTerritoryIndex = "~/Modules/Northwind/EmployeeTerritory/EmployeeTerritoryIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderIndex = "~/Modules/Northwind/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Northwind/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Northwind/Product/ProductIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/Northwind/Region/RegionIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Northwind/Shipper/ShipperIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Northwind/Supplier/SupplierIndex.cshtml";
            }

            public static class Territory
            {
                public const string TerritoryIndex = "~/Modules/Northwind/Territory/TerritoryIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

