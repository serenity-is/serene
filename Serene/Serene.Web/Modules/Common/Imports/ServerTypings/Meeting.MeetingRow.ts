namespace Serene.Meeting {
    export interface MeetingRow {
        MeetingId?: number;
        MeetingName?: string;
        MeetingNumber?: string;
        MeetingGuid?: string;
        MeetingTypeId?: number;
        StartDate?: string;
        EndDate?: string;
        LocationId?: number;
        UnitId?: number;
        OrganizerContactId?: number;
        ReporterContactId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        MeetingTypeName?: string;
        UnitName?: string;
        UnitParentUnitId?: number;
        OrganizerContactTitle?: string;
        OrganizerContactFirstName?: string;
        OrganizerContactLastName?: string;
        OrganizerContactEmail?: string;
        OrganizerContactIdentityNo?: string;
        OrganizerContactUserId?: number;
        ReporterContactTitle?: string;
        ReporterContactFirstName?: string;
        ReporterContactLastName?: string;
        ReporterContactEmail?: string;
        ReporterContactIdentityNo?: string;
        ReporterContactUserId?: number;
    }

    export namespace MeetingRow {
        export const idProperty = 'MeetingId';
        export const nameProperty = 'MeetingName';
        export const localTextPrefix = 'Meeting.Meeting';

        export namespace Fields {
            export declare const MeetingId: string;
            export declare const MeetingName: string;
            export declare const MeetingNumber: string;
            export declare const MeetingGuid: string;
            export declare const MeetingTypeId: string;
            export declare const StartDate: string;
            export declare const EndDate: string;
            export declare const LocationId: string;
            export declare const UnitId: string;
            export declare const OrganizerContactId: string;
            export declare const ReporterContactId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
            export declare const MeetingTypeName: string;
            export declare const UnitName: string;
            export declare const UnitParentUnitId: string;
            export declare const OrganizerContactTitle: string;
            export declare const OrganizerContactFirstName: string;
            export declare const OrganizerContactLastName: string;
            export declare const OrganizerContactEmail: string;
            export declare const OrganizerContactIdentityNo: string;
            export declare const OrganizerContactUserId: string;
            export declare const ReporterContactTitle: string;
            export declare const ReporterContactFirstName: string;
            export declare const ReporterContactLastName: string;
            export declare const ReporterContactEmail: string;
            export declare const ReporterContactIdentityNo: string;
            export declare const ReporterContactUserId: string;
        }

        ['MeetingId', 'MeetingName', 'MeetingNumber', 'MeetingGuid', 'MeetingTypeId', 'StartDate', 'EndDate', 'LocationId', 'UnitId', 'OrganizerContactId', 'ReporterContactId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'MeetingTypeName', 'UnitName', 'UnitParentUnitId', 'OrganizerContactTitle', 'OrganizerContactFirstName', 'OrganizerContactLastName', 'OrganizerContactEmail', 'OrganizerContactIdentityNo', 'OrganizerContactUserId', 'ReporterContactTitle', 'ReporterContactFirstName', 'ReporterContactLastName', 'ReporterContactEmail', 'ReporterContactIdentityNo', 'ReporterContactUserId'].forEach(x => (<any>Fields)[x] = x);
    }
}

