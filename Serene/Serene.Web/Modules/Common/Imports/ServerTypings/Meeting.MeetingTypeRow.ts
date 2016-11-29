namespace Serene.Meeting {
    export interface MeetingTypeRow {
        MeetingTypeId?: number;
        Name?: string;
    }

    export namespace MeetingTypeRow {
        export const idProperty = 'MeetingTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Meeting.MeetingType';

        export namespace Fields {
            export declare const MeetingTypeId: string;
            export declare const Name: string;
        }

        ['MeetingTypeId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

