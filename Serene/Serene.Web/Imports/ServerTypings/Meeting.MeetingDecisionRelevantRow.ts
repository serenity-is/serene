namespace Serene.Meeting {
    export interface MeetingDecisionRelevantRow {
        DecisionRelevantId?: number;
        DecisionId?: number;
        ContactId?: number;
        DecisionMeetingId?: number;
        DecisionAgendaId?: number;
        DecisionDescription?: string;
        DecisionDecisionNumber?: number;
        DecisionResponsibleContactId?: number;
        DecisionDueDate?: string;
        DecisionResolutionStatus?: number;
        DecisionImages?: string;
        DecisionAttachments?: string;
        ContactTitle?: string;
        ContactFirstName?: string;
        ContactLastName?: string;
        ContactEmail?: string;
        ContactIdentityNo?: string;
        ContactUserId?: number;
    }

    export namespace MeetingDecisionRelevantRow {
        export const idProperty = 'DecisionRelevantId';
        export const localTextPrefix = 'Meeting.MeetingDecisionRelevant';

        export namespace Fields {
            export declare const DecisionRelevantId: string;
            export declare const DecisionId: string;
            export declare const ContactId: string;
            export declare const DecisionMeetingId: string;
            export declare const DecisionAgendaId: string;
            export declare const DecisionDescription: string;
            export declare const DecisionDecisionNumber: string;
            export declare const DecisionResponsibleContactId: string;
            export declare const DecisionDueDate: string;
            export declare const DecisionResolutionStatus: string;
            export declare const DecisionImages: string;
            export declare const DecisionAttachments: string;
            export declare const ContactTitle: string;
            export declare const ContactFirstName: string;
            export declare const ContactLastName: string;
            export declare const ContactEmail: string;
            export declare const ContactIdentityNo: string;
            export declare const ContactUserId: string;
        }

        [
            'DecisionRelevantId', 
            'DecisionId', 
            'ContactId', 
            'DecisionMeetingId', 
            'DecisionAgendaId', 
            'DecisionDescription', 
            'DecisionDecisionNumber', 
            'DecisionResponsibleContactId', 
            'DecisionDueDate', 
            'DecisionResolutionStatus', 
            'DecisionImages', 
            'DecisionAttachments', 
            'ContactTitle', 
            'ContactFirstName', 
            'ContactLastName', 
            'ContactEmail', 
            'ContactIdentityNo', 
            'ContactUserId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

