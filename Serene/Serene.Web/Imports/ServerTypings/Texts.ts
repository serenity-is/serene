namespace Serene.Texts {

    declare namespace Db {

        namespace Administration {

            namespace DataAuditLog {
                export const FieldName: string;
                export const LogDate: string;
                export const LogId: string;
                export const LogType: string;
                export const NewValue: string;
                export const OldValue: string;
                export const RecordId: string;
                export const Tablename: string;
                export const UserDisplayName: string;
                export const UserId: string;
                export const Username: string;
            }

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleKey: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const MobilePhoneNumber: string;
                export const MobilePhoneVerified: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TwoFactorAuth: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace BackgroundTaskLog {
                export const LogId: string;
                export const Message: string;
                export const RunAt: string;
                export const Server: string;
                export const Status: string;
                export const TaskKey: string;
            }

            namespace Mail {
                export const Bcc: string;
                export const Body: string;
                export const Cc: string;
                export const ErrorMessage: string;
                export const InsertDate: string;
                export const InsertUser: string;
                export const InsertUserId: string;
                export const LockExpiration: string;
                export const MailFrom: string;
                export const MailId: string;
                export const MailTo: string;
                export const Priority: string;
                export const ReplyTo: string;
                export const RetryCount: string;
                export const SentDate: string;
                export const Status: string;
                export const Subject: string;
                export const Uid: string;
            }

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Meeting {

            namespace Meeting {
                export const AttendeeList: string;
                export const EndDate: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LocationId: string;
                export const LocationName: string;
                export const MeetingGuid: string;
                export const MeetingId: string;
                export const MeetingName: string;
                export const MeetingNumber: string;
                export const MeetingTypeId: string;
                export const MeetingTypeName: string;
                export const OrganizerContactEmail: string;
                export const OrganizerContactFirstName: string;
                export const OrganizerContactFullName: string;
                export const OrganizerContactId: string;
                export const OrganizerContactIdentityNo: string;
                export const OrganizerContactLastName: string;
                export const OrganizerContactTitle: string;
                export const OrganizerContactUserId: string;
                export const ReporterContactEmail: string;
                export const ReporterContactFirstName: string;
                export const ReporterContactFullName: string;
                export const ReporterContactId: string;
                export const ReporterContactIdentityNo: string;
                export const ReporterContactLastName: string;
                export const ReporterContactTitle: string;
                export const ReporterContactUserId: string;
                export const StartDate: string;
                export const UnitId: string;
                export const UnitName: string;
                export const UnitParentUnitId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace MeetingAgenda {
                export const AgendaId: string;
                export const AgendaNumber: string;
                export const AgendaTypeId: string;
                export const AgendaTypeName: string;
                export const Attachments: string;
                export const Description: string;
                export const Images: string;
                export const MeetingEndDate: string;
                export const MeetingId: string;
                export const MeetingInsertDate: string;
                export const MeetingInsertUserId: string;
                export const MeetingLocationId: string;
                export const MeetingMeetingGuid: string;
                export const MeetingMeetingName: string;
                export const MeetingMeetingNumber: string;
                export const MeetingMeetingTypeId: string;
                export const MeetingOrganizerContactId: string;
                export const MeetingReporterContactId: string;
                export const MeetingStartDate: string;
                export const MeetingUnitId: string;
                export const MeetingUpdateDate: string;
                export const MeetingUpdateUserId: string;
                export const RequestedByContactEmail: string;
                export const RequestedByContactFirstName: string;
                export const RequestedByContactFullName: string;
                export const RequestedByContactId: string;
                export const RequestedByContactIdentityNo: string;
                export const RequestedByContactLastName: string;
                export const RequestedByContactTitle: string;
                export const RequestedByContactUserId: string;
                export const Title: string;
            }

            namespace MeetingAgendaRelevant {
                export const AgendaAgendaNumber: string;
                export const AgendaAgendaTypeId: string;
                export const AgendaAttachments: string;
                export const AgendaDescription: string;
                export const AgendaId: string;
                export const AgendaImages: string;
                export const AgendaMeetingId: string;
                export const AgendaRelevantId: string;
                export const AgendaRequestedByContactId: string;
                export const AgendaTitle: string;
                export const ContactEmail: string;
                export const ContactFirstName: string;
                export const ContactId: string;
                export const ContactIdentityNo: string;
                export const ContactLastName: string;
                export const ContactTitle: string;
                export const ContactUserId: string;
            }

            namespace MeetingAgendaType {
                export const AgendaTypeId: string;
                export const Name: string;
            }

            namespace MeetingAttendee {
                export const AttendanceStatus: string;
                export const AttendeeId: string;
                export const AttendeeType: string;
                export const ContactEmail: string;
                export const ContactFirstName: string;
                export const ContactFullName: string;
                export const ContactId: string;
                export const ContactIdentityNo: string;
                export const ContactLastName: string;
                export const ContactTitle: string;
                export const ContactUserId: string;
                export const MeetingEndDate: string;
                export const MeetingId: string;
                export const MeetingInsertDate: string;
                export const MeetingInsertUserId: string;
                export const MeetingLocationId: string;
                export const MeetingMeetingGuid: string;
                export const MeetingMeetingName: string;
                export const MeetingMeetingNumber: string;
                export const MeetingMeetingTypeId: string;
                export const MeetingOrganizerContactId: string;
                export const MeetingReporterContactId: string;
                export const MeetingStartDate: string;
                export const MeetingUnitId: string;
                export const MeetingUpdateDate: string;
                export const MeetingUpdateUserId: string;
            }

            namespace MeetingDecision {
                export const AgendaAgendaTypeId: string;
                export const AgendaAttachments: string;
                export const AgendaDescription: string;
                export const AgendaId: string;
                export const AgendaImages: string;
                export const AgendaMeetingId: string;
                export const AgendaNumber: string;
                export const AgendaRequestedByContactId: string;
                export const AgendaTitle: string;
                export const Attachments: string;
                export const DecisionId: string;
                export const DecisionNumber: string;
                export const Description: string;
                export const DueDate: string;
                export const Images: string;
                export const MeetingEndDate: string;
                export const MeetingId: string;
                export const MeetingInsertDate: string;
                export const MeetingInsertUserId: string;
                export const MeetingLocationId: string;
                export const MeetingMeetingGuid: string;
                export const MeetingMeetingName: string;
                export const MeetingMeetingNumber: string;
                export const MeetingMeetingTypeId: string;
                export const MeetingOrganizerContactId: string;
                export const MeetingReporterContactId: string;
                export const MeetingStartDate: string;
                export const MeetingUnitId: string;
                export const MeetingUpdateDate: string;
                export const MeetingUpdateUserId: string;
                export const ResolutionStatus: string;
                export const ResponsibleContactEmail: string;
                export const ResponsibleContactFirstName: string;
                export const ResponsibleContactFullName: string;
                export const ResponsibleContactId: string;
                export const ResponsibleContactIdentityNo: string;
                export const ResponsibleContactLastName: string;
                export const ResponsibleContactTitle: string;
                export const ResponsibleContactUserId: string;
            }

            namespace MeetingDecisionRelevant {
                export const ContactEmail: string;
                export const ContactFirstName: string;
                export const ContactId: string;
                export const ContactIdentityNo: string;
                export const ContactLastName: string;
                export const ContactTitle: string;
                export const ContactUserId: string;
                export const DecisionAgendaId: string;
                export const DecisionAttachments: string;
                export const DecisionDecisionNumber: string;
                export const DecisionDescription: string;
                export const DecisionDueDate: string;
                export const DecisionId: string;
                export const DecisionImages: string;
                export const DecisionMeetingId: string;
                export const DecisionRelevantId: string;
                export const DecisionResolutionStatus: string;
                export const DecisionResponsibleContactId: string;
            }

            namespace MeetingLocation {
                export const Address: string;
                export const Latitude: string;
                export const LocationId: string;
                export const Longitude: string;
                export const Name: string;
            }

            namespace MeetingType {
                export const MeetingTypeId: string;
                export const Name: string;
            }
        }

        namespace Northwind {

            namespace Category {
                export const CategoryID: string;
                export const CategoryName: string;
                export const Description: string;
                export const Picture: string;
            }

            namespace CategoryLang {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const CustomerID: string;
                export const Email: string;
                export const Fax: string;
                export const ID: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const NoteList: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Representatives: string;
                export const SendBulletin: string;
            }

            namespace CustomerCustomerDemo {
                export const CustomerAddress: string;
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerRegion: string;
                export const CustomerTypeCustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDemographic {
                export const CustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDetails {
                export const Email: string;
                export const Id: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const LastContactedByAddress: string;
                export const LastContactedByBirthDate: string;
                export const LastContactedByCity: string;
                export const LastContactedByCountry: string;
                export const LastContactedByExtension: string;
                export const LastContactedByFirstName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByLastName: string;
                export const LastContactedByNotes: string;
                export const LastContactedByPhoto: string;
                export const LastContactedByPhotoPath: string;
                export const LastContactedByPostalCode: string;
                export const LastContactedByRegion: string;
                export const LastContactedByReportsTo: string;
                export const LastContactedByTitle: string;
                export const LastContactedByTitleOfCourtesy: string;
                export const SendBulletin: string;
            }

            namespace CustomerGrossSales {
                export const ContactName: string;
                export const CustomerId: string;
                export const GrossAmount: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace CustomerRepresentatives {
                export const CustomerId: string;
                export const EmployeeId: string;
                export const RepresentativeId: string;
            }

            namespace DragDropSample {
                export const Id: string;
                export const ParentId: string;
                export const Title: string;
            }

            namespace Employee {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeID: string;
                export const Extension: string;
                export const FirstName: string;
                export const FullName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const LastName: string;
                export const Notes: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PostalCode: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToFullName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToReportsTo: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace EmployeeTerritory {
                export const EmployeeAddress: string;
                export const EmployeeBirthDate: string;
                export const EmployeeCity: string;
                export const EmployeeCountry: string;
                export const EmployeeExtension: string;
                export const EmployeeFirstName: string;
                export const EmployeeHireDate: string;
                export const EmployeeHomePhone: string;
                export const EmployeeID: string;
                export const EmployeeLastName: string;
                export const EmployeeNotes: string;
                export const EmployeePhoto: string;
                export const EmployeePhotoPath: string;
                export const EmployeePostalCode: string;
                export const EmployeeRegion: string;
                export const EmployeeReportsTo: string;
                export const EmployeeTitle: string;
                export const EmployeeTitleOfCourtesy: string;
                export const TerritoryID: string;
                export const TerritoryRegionID: string;
                export const TerritoryTerritoryDescription: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Order {
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerRegion: string;
                export const DetailList: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeID: string;
                export const EmployeeReportsToFullName: string;
                export const Freight: string;
                export const OrderDate: string;
                export const OrderID: string;
                export const RequiredDate: string;
                export const ShipAddress: string;
                export const ShipCity: string;
                export const ShipCountry: string;
                export const ShipName: string;
                export const ShipPostalCode: string;
                export const ShipRegion: string;
                export const ShipVia: string;
                export const ShipViaCompanyName: string;
                export const ShipViaPhone: string;
                export const ShippedDate: string;
                export const ShippingState: string;
            }

            namespace OrderDetail {
                export const DetailID: string;
                export const Discount: string;
                export const LineTotal: string;
                export const OrderCustomerID: string;
                export const OrderDate: string;
                export const OrderEmployeeID: string;
                export const OrderID: string;
                export const OrderShipCity: string;
                export const OrderShipCountry: string;
                export const OrderShipVia: string;
                export const OrderShippedDate: string;
                export const ProductDiscontinued: string;
                export const ProductID: string;
                export const ProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductSupplierID: string;
                export const ProductUnitPrice: string;
                export const Quantity: string;
                export const UnitPrice: string;
            }

            namespace Product {
                export const CategoryDescription: string;
                export const CategoryID: string;
                export const CategoryName: string;
                export const CategoryPicture: string;
                export const Discontinued: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierAddress: string;
                export const SupplierCity: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountry: string;
                export const SupplierFax: string;
                export const SupplierHomePage: string;
                export const SupplierID: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierRegion: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace ProductLog {
                export const CategoryID: string;
                export const ChangingUserId: string;
                export const Discontinued: string;
                export const OperationType: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductLogID: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierID: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Region {
                export const RegionDescription: string;
                export const RegionID: string;
            }

            namespace SalesByCategory {
                export const CategoryId: string;
                export const CategoryName: string;
                export const ProductName: string;
                export const ProductSales: string;
            }

            namespace Shipper {
                export const CompanyName: string;
                export const Phone: string;
                export const ShipperID: string;
            }

            namespace Supplier {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const Fax: string;
                export const HomePage: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const SupplierID: string;
            }

            namespace Territory {
                export const ID: string;
                export const RegionDescription: string;
                export const RegionID: string;
                export const TerritoryDescription: string;
                export const TerritoryID: string;
            }
        }

        namespace Organization {

            namespace BusinessUnit {
                export const Name: string;
                export const ParentUnitId: string;
                export const ParentUnitName: string;
                export const ParentUnitParentUnitId: string;
                export const UnitId: string;
            }

            namespace Contact {
                export const ContactId: string;
                export const Email: string;
                export const FirstName: string;
                export const FullName: string;
                export const IdentityNo: string;
                export const LastName: string;
                export const Title: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const Username: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace CardViewMixin {
            export const CardView: string;
            export const ListView: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Dialogs {
            export const PendingChangesConfirmation: string;
        }

        namespace DraggableGroupingMixin {
            export const CollapseAllButton: string;
            export const DropPlaceholder: string;
            export const ExpandAllButton: string;
        }

        namespace EmailClient {
            export const BackButton: string;
            export const CCLabel: string;
            export const CancelButton: string;
            export const ComposeButton: string;
            export const DeleteButton: string;
            export const DeleteMessageConfirmation: string;
            export const DeleteMessageSuccess: string;
            export const DeleteNoSelectionWarning: string;
            export const DeleteSelectedConfirmation: string;
            export const DeleteSelectedSuccess: string;

            namespace FolderNames {
                export const drafts: string;
                export const inbox: string;
                export const junk: string;
                export const sent: string;
                export const trash: string;
            }
            export const FoldersTitle: string;
            export const ForwardButton: string;
            export const ImapHost: string;
            export const ImapPassword: string;
            export const ImapPort: string;
            export const ImapUsername: string;
            export const LoginButton: string;
            export const LoginTitle: string;
            export const MoveMessageSuccess: string;
            export const MoveNoSelectionWarning: string;
            export const MoveSelectedSuccess: string;
            export const MoveToFolder: string;
            export const NewEmailDialogTitle: string;
            export const PageTitle: string;
            export const QuickSettings: string;
            export const RefreshButton: string;
            export const ReplyAllButton: string;
            export const ReplyButton: string;
            export const ReplyEmailDialogTitle: string;
            export const SearchPlaceholder: string;
            export const SendButton: string;
            export const SignoutButton: string;
            export const SmtpHost: string;
            export const SmtpPassword: string;
            export const SmtpPort: string;
            export const SmtpUsername: string;
            export const ToLabel: string;
            export const ToggleReadButton: string;
            export const ToggleSeenNoSelectionWarning: string;
        }

        namespace FavoriteViewsMixin {
            export const DeleteButtonHint: string;
            export const DeleteSuccessMessage: string;
            export const EmptyNameError: string;
            export const FavoriteViews: string;
            export const LoadedViewMessage: string;
            export const SaveButton: string;
            export const SaveSuccessMessage: string;
            export const SaveView: string;
        }

        namespace HeaderFiltersMixin {
            export const CancelButton: string;
            export const ClearButton: string;
            export const OkButton: string;
            export const Search: string;
            export const SelectAll: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeAzure: string;
            export const ThemeAzureLight: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeCosmos: string;
            export const ThemeCosmosLight: string;
            export const ThemeGlassy: string;
            export const ThemeGlassyLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }

        namespace WizardDialog {
            export const BackButton: string;
            export const CancelMessage: string;
            export const FinishButton: string;
            export const NextButton: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const NorthwindPhone: string;
        export const NorthwindPhoneMultiple: string;
        export const SavePrimaryKeyError: string;
    }

    Serene['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{DataAuditLog:{FieldName:1,LogDate:1,LogId:1,LogType:1,NewValue:1,OldValue:1,RecordId:1,Tablename:1,UserDisplayName:1,UserId:1,Username:1},Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleKey:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,MobilePhoneNumber:1,MobilePhoneVerified:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TwoFactorAuth:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{BackgroundTaskLog:{LogId:1,Message:1,RunAt:1,Server:1,Status:1,TaskKey:1},Mail:{Bcc:1,Body:1,Cc:1,ErrorMessage:1,InsertDate:1,InsertUser:1,InsertUserId:1,LockExpiration:1,MailFrom:1,MailId:1,MailTo:1,Priority:1,ReplyTo:1,RetryCount:1,SentDate:1,Status:1,Subject:1,Uid:1},UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Meeting:{Meeting:{AttendeeList:1,EndDate:1,InsertDate:1,InsertUserId:1,LocationId:1,LocationName:1,MeetingGuid:1,MeetingId:1,MeetingName:1,MeetingNumber:1,MeetingTypeId:1,MeetingTypeName:1,OrganizerContactEmail:1,OrganizerContactFirstName:1,OrganizerContactFullName:1,OrganizerContactId:1,OrganizerContactIdentityNo:1,OrganizerContactLastName:1,OrganizerContactTitle:1,OrganizerContactUserId:1,ReporterContactEmail:1,ReporterContactFirstName:1,ReporterContactFullName:1,ReporterContactId:1,ReporterContactIdentityNo:1,ReporterContactLastName:1,ReporterContactTitle:1,ReporterContactUserId:1,StartDate:1,UnitId:1,UnitName:1,UnitParentUnitId:1,UpdateDate:1,UpdateUserId:1},MeetingAgenda:{AgendaId:1,AgendaNumber:1,AgendaTypeId:1,AgendaTypeName:1,Attachments:1,Description:1,Images:1,MeetingEndDate:1,MeetingId:1,MeetingInsertDate:1,MeetingInsertUserId:1,MeetingLocationId:1,MeetingMeetingGuid:1,MeetingMeetingName:1,MeetingMeetingNumber:1,MeetingMeetingTypeId:1,MeetingOrganizerContactId:1,MeetingReporterContactId:1,MeetingStartDate:1,MeetingUnitId:1,MeetingUpdateDate:1,MeetingUpdateUserId:1,RequestedByContactEmail:1,RequestedByContactFirstName:1,RequestedByContactFullName:1,RequestedByContactId:1,RequestedByContactIdentityNo:1,RequestedByContactLastName:1,RequestedByContactTitle:1,RequestedByContactUserId:1,Title:1},MeetingAgendaRelevant:{AgendaAgendaNumber:1,AgendaAgendaTypeId:1,AgendaAttachments:1,AgendaDescription:1,AgendaId:1,AgendaImages:1,AgendaMeetingId:1,AgendaRelevantId:1,AgendaRequestedByContactId:1,AgendaTitle:1,ContactEmail:1,ContactFirstName:1,ContactId:1,ContactIdentityNo:1,ContactLastName:1,ContactTitle:1,ContactUserId:1},MeetingAgendaType:{AgendaTypeId:1,Name:1},MeetingAttendee:{AttendanceStatus:1,AttendeeId:1,AttendeeType:1,ContactEmail:1,ContactFirstName:1,ContactFullName:1,ContactId:1,ContactIdentityNo:1,ContactLastName:1,ContactTitle:1,ContactUserId:1,MeetingEndDate:1,MeetingId:1,MeetingInsertDate:1,MeetingInsertUserId:1,MeetingLocationId:1,MeetingMeetingGuid:1,MeetingMeetingName:1,MeetingMeetingNumber:1,MeetingMeetingTypeId:1,MeetingOrganizerContactId:1,MeetingReporterContactId:1,MeetingStartDate:1,MeetingUnitId:1,MeetingUpdateDate:1,MeetingUpdateUserId:1},MeetingDecision:{AgendaAgendaTypeId:1,AgendaAttachments:1,AgendaDescription:1,AgendaId:1,AgendaImages:1,AgendaMeetingId:1,AgendaNumber:1,AgendaRequestedByContactId:1,AgendaTitle:1,Attachments:1,DecisionId:1,DecisionNumber:1,Description:1,DueDate:1,Images:1,MeetingEndDate:1,MeetingId:1,MeetingInsertDate:1,MeetingInsertUserId:1,MeetingLocationId:1,MeetingMeetingGuid:1,MeetingMeetingName:1,MeetingMeetingNumber:1,MeetingMeetingTypeId:1,MeetingOrganizerContactId:1,MeetingReporterContactId:1,MeetingStartDate:1,MeetingUnitId:1,MeetingUpdateDate:1,MeetingUpdateUserId:1,ResolutionStatus:1,ResponsibleContactEmail:1,ResponsibleContactFirstName:1,ResponsibleContactFullName:1,ResponsibleContactId:1,ResponsibleContactIdentityNo:1,ResponsibleContactLastName:1,ResponsibleContactTitle:1,ResponsibleContactUserId:1},MeetingDecisionRelevant:{ContactEmail:1,ContactFirstName:1,ContactId:1,ContactIdentityNo:1,ContactLastName:1,ContactTitle:1,ContactUserId:1,DecisionAgendaId:1,DecisionAttachments:1,DecisionDecisionNumber:1,DecisionDescription:1,DecisionDueDate:1,DecisionId:1,DecisionImages:1,DecisionMeetingId:1,DecisionRelevantId:1,DecisionResolutionStatus:1,DecisionResponsibleContactId:1},MeetingLocation:{Address:1,Latitude:1,LocationId:1,Longitude:1,Name:1},MeetingType:{MeetingTypeId:1,Name:1}},Northwind:{Category:{CategoryID:1,CategoryName:1,Description:1,Picture:1},CategoryLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},Customer:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,CustomerID:1,Email:1,Fax:1,ID:1,LastContactDate:1,LastContactedBy:1,NoteList:1,Phone:1,PostalCode:1,Region:1,Representatives:1,SendBulletin:1},CustomerCustomerDemo:{CustomerAddress:1,CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerPostalCode:1,CustomerRegion:1,CustomerTypeCustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDemographic:{CustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDetails:{Email:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFirstName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByLastName:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,SendBulletin:1},CustomerGrossSales:{ContactName:1,CustomerId:1,GrossAmount:1,ProductId:1,ProductName:1},CustomerRepresentatives:{CustomerId:1,EmployeeId:1,RepresentativeId:1},DragDropSample:{Id:1,ParentId:1,Title:1},Employee:{Address:1,BirthDate:1,City:1,Country:1,EmployeeID:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,Title:1,TitleOfCourtesy:1},EmployeeTerritory:{EmployeeAddress:1,EmployeeBirthDate:1,EmployeeCity:1,EmployeeCountry:1,EmployeeExtension:1,EmployeeFirstName:1,EmployeeHireDate:1,EmployeeHomePhone:1,EmployeeID:1,EmployeeLastName:1,EmployeeNotes:1,EmployeePhoto:1,EmployeePhotoPath:1,EmployeePostalCode:1,EmployeeRegion:1,EmployeeReportsTo:1,EmployeeTitle:1,EmployeeTitleOfCourtesy:1,TerritoryID:1,TerritoryRegionID:1,TerritoryTerritoryDescription:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Order:{CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerRegion:1,DetailList:1,EmployeeFullName:1,EmployeeGender:1,EmployeeID:1,EmployeeReportsToFullName:1,Freight:1,OrderDate:1,OrderID:1,RequiredDate:1,ShipAddress:1,ShipCity:1,ShipCountry:1,ShipName:1,ShipPostalCode:1,ShipRegion:1,ShipVia:1,ShipViaCompanyName:1,ShipViaPhone:1,ShippedDate:1,ShippingState:1},OrderDetail:{DetailID:1,Discount:1,LineTotal:1,OrderCustomerID:1,OrderDate:1,OrderEmployeeID:1,OrderID:1,OrderShipCity:1,OrderShipCountry:1,OrderShipVia:1,OrderShippedDate:1,ProductDiscontinued:1,ProductID:1,ProductName:1,ProductQuantityPerUnit:1,ProductSupplierID:1,ProductUnitPrice:1,Quantity:1,UnitPrice:1},Product:{CategoryDescription:1,CategoryID:1,CategoryName:1,CategoryPicture:1,Discontinued:1,ProductID:1,ProductImage:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierAddress:1,SupplierCity:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountry:1,SupplierFax:1,SupplierHomePage:1,SupplierID:1,SupplierPhone:1,SupplierPostalCode:1,SupplierRegion:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},ProductLog:{CategoryID:1,ChangingUserId:1,Discontinued:1,OperationType:1,ProductID:1,ProductImage:1,ProductLogID:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierID:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Region:{RegionDescription:1,RegionID:1},SalesByCategory:{CategoryId:1,CategoryName:1,ProductName:1,ProductSales:1},Shipper:{CompanyName:1,Phone:1,ShipperID:1},Supplier:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,Fax:1,HomePage:1,Phone:1,PostalCode:1,Region:1,SupplierID:1},Territory:{ID:1,RegionDescription:1,RegionID:1,TerritoryDescription:1,TerritoryID:1}},Organization:{BusinessUnit:{Name:1,ParentUnitId:1,ParentUnitName:1,ParentUnitParentUnitId:1,UnitId:1},Contact:{ContactId:1,Email:1,FirstName:1,FullName:1,IdentityNo:1,LastName:1,Title:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserPasswordHash:1,UserPasswordSalt:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,Username:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},CardViewMixin:{CardView:1,ListView:1},Dashboard:{ContentDescription:1},Dialogs:{PendingChangesConfirmation:1},DraggableGroupingMixin:{CollapseAllButton:1,DropPlaceholder:1,ExpandAllButton:1},EmailClient:{BackButton:1,CCLabel:1,CancelButton:1,ComposeButton:1,DeleteButton:1,DeleteMessageConfirmation:1,DeleteMessageSuccess:1,DeleteNoSelectionWarning:1,DeleteSelectedConfirmation:1,DeleteSelectedSuccess:1,FolderNames:{drafts:1,inbox:1,junk:1,sent:1,trash:1},FoldersTitle:1,ForwardButton:1,ImapHost:1,ImapPassword:1,ImapPort:1,ImapUsername:1,LoginButton:1,LoginTitle:1,MoveMessageSuccess:1,MoveNoSelectionWarning:1,MoveSelectedSuccess:1,MoveToFolder:1,NewEmailDialogTitle:1,PageTitle:1,QuickSettings:1,RefreshButton:1,ReplyAllButton:1,ReplyButton:1,ReplyEmailDialogTitle:1,SearchPlaceholder:1,SendButton:1,SignoutButton:1,SmtpHost:1,SmtpPassword:1,SmtpPort:1,SmtpUsername:1,ToLabel:1,ToggleReadButton:1,ToggleSeenNoSelectionWarning:1},FavoriteViewsMixin:{DeleteButtonHint:1,DeleteSuccessMessage:1,EmptyNameError:1,FavoriteViews:1,LoadedViewMessage:1,SaveButton:1,SaveSuccessMessage:1,SaveView:1},HeaderFiltersMixin:{CancelButton:1,ClearButton:1,OkButton:1,Search:1,SelectAll:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeAzure:1,ThemeAzureLight:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeCosmos:1,ThemeCosmosLight:1,ThemeGlassy:1,ThemeGlassyLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1},WizardDialog:{BackButton:1,CancelMessage:1,FinishButton:1,NextButton:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,NorthwindPhone:1,NorthwindPhoneMultiple:1,SavePrimaryKeyError:1}});
}

