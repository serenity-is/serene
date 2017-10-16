namespace Serene.Meeting {
    export interface MeetingAgendaTypeRow {
        AgendaTypeId?: number;
        Name?: string;
    }

    export namespace MeetingAgendaTypeRow {
        export const idProperty = 'AgendaTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Meeting.MeetingAgendaType';
        export const lookupKey = 'Meeting.MeetingAgendaType';

        export function getLookup(): Q.Lookup<MeetingAgendaTypeRow> {
            return Q.getLookup<MeetingAgendaTypeRow>('Meeting.MeetingAgendaType');
        }

        export namespace Fields {
            export declare const AgendaTypeId: string;
            export declare const Name: string;
        }

        [
            'AgendaTypeId', 
            'Name'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

