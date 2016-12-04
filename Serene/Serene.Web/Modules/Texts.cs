using Serenity;
using Serenity.Extensibility;

namespace Serene
{
    [NestedLocalTexts]
    public static partial class Texts
    {
        public static class Db
        {
            public static class Administration
            {
                public static class Translation
                {
                    public static LocalText EntityPlural = "Translations";
                    public static LocalText Key = "Local Text Key";
                    public static LocalText SourceLanguage = "Source Language";
                    public static LocalText SourceText = "Effective Translation in Source Language";
                    public static LocalText TargetLanguage = "Target Language";
                    public static LocalText TargetText = "Effective Translation in Target Language";
                    public static LocalText CustomText = "User Translation in Target Language";
                    public static LocalText OverrideConfirmation = "Overwrite user translation with clicked text?";
                    public static LocalText SaveChangesButton = "Save Changes";
                }
            }
        }

        public static class Forms
        {
            public static class Membership
            {
                public static class ChangePassword
                {
                    public static LocalText FormTitle = "Change Password";
                    public static LocalText SubmitButton = "Change Password";
                    public static LocalText Success = "Your password is changed.";
                }

                public static class ForgotPassword
                {
                    public static LocalText FormInfo = "Please enter the e-mail you used to signup.";
                    public static LocalText FormTitle = "Forgot My Password";
                    public static LocalText SubmitButton = "Reset My Password";
                    public static LocalText Success = "An e-mail with password reset instructions is sent to your e-mail address.";
                    public static LocalText BackToLogin = "I remember my password";
                }

                public static class ResetPassword
                {
                    public static LocalText EmailSubject = "Reset Your Serene Password";
                    public static LocalText FormTitle = "Reset Password";
                    public static LocalText SubmitButton = "Reset Password";
                    public static LocalText Success = "Your password is changed. Please login with your new password.";
                    public static LocalText BackToLogin = "I remember my password. Don't reset it!";
                }

                public static class Login
                {
                    public static LocalText FormTitle = "Welcome to SERENE (Serenity Application Template)";
                    public static LocalText SignInButton = "Sign In";
                    public static LocalText ForgotPassword = "Forgot password?";
                    public static LocalText SignUpButton = "Register a new account";
                    public static LocalText RememberMe = "Remember Me";
                    public static LocalText OR = "OR";
                    public static LocalText FacebookButton = "Sign in using Facebook";
                    public static LocalText GoogleButton = "Sign in using Google+";
                }

                public static class SignUp
                {
                    public static LocalText ActivateEmailSubject = "Activate Your Serene Account";
                    public static LocalText ActivationCompleteMessage = "Your account is now activated. " + 
                        "Use the e-mail and password you used while signing up to login.";
                    public static LocalText FormInfo = "Enter your details to create a free account.";
                    public static LocalText FormTitle = "Sign up for Serene";
                    public static LocalText SubmitButton = "Sign Up";
                    public static LocalText Success = "An e-mail with instructions to active your account is " + 
                        "sent to your e-mail address. Please check your e-mails.";

                    public static LocalText DisplayName = "Full Name";
                    public static LocalText Email = "E-mail";
                    public static LocalText ConfirmEmail = "Confirm Email";
                    public static LocalText Password = "Password";
                    public static LocalText ConfirmPassword = "Confirm Password";

                    public static LocalText AcceptTerms = "I agree to the terms";
                    public static LocalText BackToLogin = "I already have a membership";
                }
            }
        }

        public static class Navigation
        {
            public static LocalText LogoutLink = "Logout";
            public static LocalText SiteTitle = "Serene";
        }

        public static class Site
        {
            public static class Dashboard
            {
                public static LocalText ContentDescription =
                    "a sample with random data (from free <em><a href = \"https://almsaeedstudio.com/\" target= \"_blank\">" +
                    "AdminLTE theme</a></em>)";
            }

            public static class BasicProgressDialog
            {
                public static LocalText CancelTitle = "Operation cancelled. Waiting for in progress calls to complete...";
                public static LocalText PleaseWait = "Please wait...";
            }

            public static class BulkServiceAction
            {
                public static LocalText AllHadErrorsFormat = "All {0} record(s) that are processed had errors!";
                public static LocalText AllSuccessFormat = "Finished processing on {0} record(s) with success.";
                public static LocalText ConfirmationFormat = "Perform this operation on {0} selected record(s)?";
                public static LocalText ErrorCount = "{0} error(s)";
                public static LocalText NothingToProcess = "Please select some records to process!";
                public static LocalText SomeHadErrorsFormat = "Finished processing on {0} record(s) with success. {1} record(s) had errors!";
                public static LocalText SuccessCount = "{0} done";
            }

            public static class UserDialog
            {
                public static LocalText EditPermissionsButton = "Edit Permissions";
                public static LocalText EditRolesButton = "Edit Roles";
            }

            public static class UserRoleDialog
            {
                public static LocalText DialogTitle = "Edit User Roles ({0})";
                public static LocalText SaveSuccess = "Updated user roles.";
            }

            public static class UserPermissionDialog
            {
                public static LocalText DialogTitle = "Edit User Permissions ({0})";
                public static LocalText SaveSuccess = "Updated user permissions.";
                public static LocalText Permission = "Permission";
                public static LocalText Grant = "Grant";
                public static LocalText Revoke = "Revoke";
            }

            public static class RolePermissionDialog
            {
                public static LocalText EditButton = "Edit Permissions";
                public static LocalText DialogTitle = "Edit Role Permissions ({0})";
                public static LocalText SaveSuccess = "Updated role permissions.";
            }

            public static class Layout
            {
                public static LocalText FooterCopyright = "Copyright (c) 2015.";
                public static LocalText FooterInfo = "Serenity Platform";
                public static LocalText FooterRights = "All rights reserved.";
                public static LocalText GeneralSettings = "General Settings";
                public static LocalText Language = "Language";
                public static LocalText Theme = "Theme";
                public static LocalText ThemeBlack = "Black";
                public static LocalText ThemeBlackLight = "Black Light";
                public static LocalText ThemeBlue = "Blue";
                public static LocalText ThemeBlueLight = "Blue Light";
                public static LocalText ThemeGreen = "Green";
                public static LocalText ThemeGreenLight = "Green Light";
                public static LocalText ThemePurple = "Purple";
                public static LocalText ThemePurpleLight = "Purple Light";
                public static LocalText ThemeRed = "Red";
                public static LocalText ThemeRedLight = "Red Light";
                public static LocalText ThemeYellow = "Yellow";
                public static LocalText ThemeYellowLight = "Yellow Light";
            }

            public static class ValidationError
            {
                public static LocalText Title = "ERROR";
            }
        }

        public static class Validation
        {
            public static LocalText AuthenticationError = "Invalid username or password!";
            public static LocalText CurrentPasswordMismatch = "Your current password is not valid!";
            public static LocalText MinRequiredPasswordLength = "Entered password doesn't have enough characters (min {0})!";
            public static LocalText InvalidResetToken = "Your token to reset your password is invalid or has expired!";
            public static LocalText InvalidActivateToken = "Your token to activate your account is invalid or has expired!";
            public static LocalText CantFindUserWithEmail = "Can't find a user with that e-mail adress!";
            public static LocalText EmailInUse = "Another user with this e-mail exists!";
            public static LocalText EmailConfirm = "Emails entered doesn't match!";
            public static LocalText DeleteForeignKeyError = "Can't delete record. '{0}' table has " +
                "records that depends on this one!";
            public static LocalText NorthwindPhone = "Phone numbers should be entered in format '(503) 555-9831'.";
            public static LocalText NorthwindPhoneMultiple = "Phone numbers should be entered in format '(503) 555-9831. " +
                "Multiple numbers can be separated with comma.";
            public static LocalText SavePrimaryKeyError = "Can't save record. There is another record with the same {1} value!";
        }
    }
}