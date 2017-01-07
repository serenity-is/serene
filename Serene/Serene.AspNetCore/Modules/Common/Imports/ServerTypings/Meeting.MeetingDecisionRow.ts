namespace Serene.Meeting {
    export interface MeetingDecisionRow {
        DecisionId?: number;
        MeetingId?: number;
        AgendaId?: number;
        Description?: string;
        DecisionNumber?: number;
        ResponsibleContactId?: number;
        DueDate?: string;
        ResolutionStatus?: number;
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
        AgendaMeetingId?: number;
        AgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: string;
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: string;
        AgendaAttachments?: string;
        DecisionNumberName?: string;
        ResponsibleContactTitle?: string;
        ResponsibleContactFirstName?: string;
        ResponsibleContactLastName?: string;
        ResponsibleContactFullName?: string;
        ResponsibleContactEmail?: string;
        ResponsibleContactIdentityNo?: string;
        ResponsibleContactUserId?: number;
    }

    export namespace MeetingDecisionRow {
        export const idProperty = 'DecisionId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Meeting.MeetingDecision';

        export namespace Fields {
            export declare const DecisionId: string;
            export declare const MeetingId: string;
            export declare const AgendaId: string;
            export declare const Description: string;
            export declare const DecisionNumber: string;
            export declare const ResponsibleContactId: string;
            export declare const DueDate: string;
            export declare const ResolutionStatus: string;
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
            export declare const AgendaMeetingId: string;
            export declare const AgendaNumber: string;
            export declare const AgendaTitle: string;
            export declare const AgendaDescription: string;
            export declare const AgendaAgendaTypeId: string;
            export declare const AgendaRequestedByContactId: string;
            export declare const AgendaImages: string;
            export declare const AgendaAttachments: string;
            export declare const DecisionNumberName: string;
            export declare const ResponsibleContactTitle: string;
            export declare const ResponsibleContactFirstName: string;
            export declare const ResponsibleContactLastName: string;
            export declare const ResponsibleContactFullName: string;
            export declare const ResponsibleContactEmail: string;
            export declare const ResponsibleContactIdentityNo: string;
            export declare const ResponsibleContactUserId: string;
        }

        ['DecisionId', 'MeetingId', 'AgendaId', 'Description', 'DecisionNumber', 'ResponsibleContactId', 'DueDate', 'ResolutionStatus', 'Images', 'Attachments', 'MeetingMeetingName', 'MeetingMeetingNumber', 'MeetingMeetingGuid', 'MeetingMeetingTypeId', 'MeetingStartDate', 'MeetingEndDate', 'MeetingLocationId', 'MeetingUnitId', 'MeetingOrganizerContactId', 'MeetingReporterContactId', 'MeetingInsertUserId', 'MeetingInsertDate', 'MeetingUpdateUserId', 'MeetingUpdateDate', 'AgendaMeetingId', 'AgendaNumber', 'AgendaTitle', 'AgendaDescription', 'AgendaAgendaTypeId', 'AgendaRequestedByContactId', 'AgendaImages', 'AgendaAttachments', 'DecisionNumberName', 'ResponsibleContactTitle', 'ResponsibleContactFirstName', 'ResponsibleContactLastName', 'ResponsibleContactFullName', 'ResponsibleContactEmail', 'ResponsibleContactIdentityNo', 'ResponsibleContactUserId'].forEach(x => (<any>Fields)[x] = x);
    }
}
