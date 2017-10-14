namespace Serene.Meeting {
    export interface MeetingAttendeeRow {
        AttendeeId?: number;
        MeetingId?: number;
        ContactId?: number;
        AttendeeType?: MeetingAttendeeType;
        AttendanceStatus?: MeetingAttendanceStatus;
        MeetingMeetingName?: string;
        MeetingMeetingNumber?: string;
        MeetingMeetingGuid?: string;
        MeetingMeetingTypeId?: number;
        MeetingStartDate?: string;
        MeetingEndDate?: string;
        MeetingLocationId?: number;
        MeetingUnitId?: number;
        MeetingOrganizerContactId?: number;
        MeetingReporterContactId?: number;
        MeetingInsertUserId?: number;
        MeetingInsertDate?: string;
        MeetingUpdateUserId?: number;
        MeetingUpdateDate?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactFullName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }

    export namespace MeetingAttendeeRow {
        export const idProperty = 'AttendeeId';
        export const localTextPrefix = 'Meeting.MeetingAttendee';

        export namespace Fields {
            export declare const AttendeeId: string;
            export declare const MeetingId: string;
            export declare const ContactId: string;
            export declare const AttendeeType: string;
            export declare const AttendanceStatus: string;
            export declare const MeetingMeetingName: string;
            export declare const MeetingMeetingNumber: string;
            export declare const MeetingMeetingGuid: string;
            export declare const MeetingMeetingTypeId: string;
            export declare const MeetingStartDate: string;
            export declare const MeetingEndDate: string;
            export declare const MeetingLocationId: string;
            export declare const MeetingUnitId: string;
            export declare const MeetingOrganizerContactId: string;
            export declare const MeetingReporterContactId: string;
            export declare const MeetingInsertUserId: string;
            export declare const MeetingInsertDate: string;
            export declare const MeetingUpdateUserId: string;
            export declare const MeetingUpdateDate: string;
            export declare const ContactTitle: string;
            export declare const ContactFirstName: string;
            export declare const ContactLastName: string;
            export declare const ContactFullName: string;
            export declare const ContactEmail: string;
            export declare const ContactIdentityNo: string;
            export declare const ContactUserId: string;
        }

        [
            'AttendeeId', 
            'MeetingId', 
            'ContactId', 
            'AttendeeType', 
            'AttendanceStatus', 
            'MeetingMeetingName', 
            'MeetingMeetingNumber', 
            'MeetingMeetingGuid', 
            'MeetingMeetingTypeId', 
            'MeetingStartDate', 
            'MeetingEndDate', 
            'MeetingLocationId', 
            'MeetingUnitId', 
            'MeetingOrganizerContactId', 
            'MeetingReporterContactId', 
            'MeetingInsertUserId', 
            'MeetingInsertDate', 
            'MeetingUpdateUserId', 
            'MeetingUpdateDate', 
            'ContactTitle', 
            'ContactFirstName', 
            'ContactLastName', 
            'ContactFullName', 
            'ContactEmail', 
            'ContactIdentityNo', 
            'ContactUserId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
