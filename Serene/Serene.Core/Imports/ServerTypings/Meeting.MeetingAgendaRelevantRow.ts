namespace Serene.Meeting {
    export interface MeetingAgendaRelevantRow {
        AgendaRelevantId?: number;
        AgendaId?: number;
        ContactId?: number;
        AgendaMeetingId?: number;
        AgendaAgendaNumber?: number;
        AgendaTitle?: string;
        AgendaDescription?: string;
        AgendaAgendaTypeId?: number;
        AgendaRequestedByContactId?: number;
        AgendaImages?: string;
        AgendaAttachments?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }

    export namespace MeetingAgendaRelevantRow {
        export const idProperty = 'AgendaRelevantId';
        export const localTextPrefix = 'Meeting.MeetingAgendaRelevant';

        export namespace Fields {
            export declare const AgendaRelevantId: string;
            export declare const AgendaId: string;
            export declare const ContactId: string;
            export declare const AgendaMeetingId: string;
            export declare const AgendaAgendaNumber: string;
            export declare const AgendaTitle: string;
            export declare const AgendaDescription: string;
            export declare const AgendaAgendaTypeId: string;
            export declare const AgendaRequestedByContactId: string;
            export declare const AgendaImages: string;
            export declare const AgendaAttachments: string;
            export declare const ContactTitle: string;
            export declare const ContactFirstName: string;
            export declare const ContactLastName: string;
            export declare const ContactEmail: string;
            export declare const ContactIdentityNo: string;
            export declare const ContactUserId: string;
        }

        [
            'AgendaRelevantId', 
            'AgendaId', 
            'ContactId', 
            'AgendaMeetingId', 
            'AgendaAgendaNumber', 
            'AgendaTitle', 
            'AgendaDescription', 
            'AgendaAgendaTypeId', 
            'AgendaRequestedByContactId', 
            'AgendaImages', 
            'AgendaAttachments', 
            'ContactTitle', 
            'ContactFirstName', 
            'ContactLastName', 
            'ContactEmail', 
            'ContactIdentityNo', 
            'ContactUserId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
