namespace Serene.Meeting {
    export interface MeetingAgendaRow {
        AgendaId?: number;
        MeetingId?: number;
        AgendaNumber?: number;
        Title?: string;
        Description?: string;
        AgendaTypeId?: number;
        RequestedByContactId?: number;
        Images?: string;
        Attachments?: string;
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
        AgendaTypeName?: string;
        RequestedByContactTitle?: string;
        RequestedByContactFirstName?: string;
        RequestedByContactLastName?: string;
        RequestedByContactFullName?: string;
        RequestedByContactEmail?: string;
        RequestedByContactIdentityNo?: string;
        RequestedByContactUserId?: number;
    }

    export namespace MeetingAgendaRow {
        export const idProperty = 'AgendaId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Meeting.MeetingAgenda';

        export namespace Fields {
            export declare const AgendaId: string;
            export declare const MeetingId: string;
            export declare const AgendaNumber: string;
            export declare const Title: string;
            export declare const Description: string;
            export declare const AgendaTypeId: string;
            export declare const RequestedByContactId: string;
            export declare const Images: string;
            export declare const Attachments: string;
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
            export declare const AgendaTypeName: string;
            export declare const RequestedByContactTitle: string;
            export declare const RequestedByContactFirstName: string;
            export declare const RequestedByContactLastName: string;
            export declare const RequestedByContactFullName: string;
            export declare const RequestedByContactEmail: string;
            export declare const RequestedByContactIdentityNo: string;
            export declare const RequestedByContactUserId: string;
        }

        ['AgendaId', 'MeetingId', 'AgendaNumber', 'Title', 'Description', 'AgendaTypeId', 'RequestedByContactId', 'Images', 'Attachments', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'AgendaTypeName', 'RequestedByContactTitle', 'RequestedByContactFirstName', 'RequestedByContactLastName', 'RequestedByContactFullName', 'RequestedByContactEmail', 'RequestedByContactIdentityNo', 'RequestedByContactUserId'].forEach(x => (<any>Fields)[x] = x);
    }
}

