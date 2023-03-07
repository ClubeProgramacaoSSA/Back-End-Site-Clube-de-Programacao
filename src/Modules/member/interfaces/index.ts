export interface IMembers {
    'born_at'?: Date | null;
    'created_at'?: Date | null;
    'description'?: string | null;
    'fullname': string;
    'gender': string | null;
    'id'?: string;
    'started_course_at': Date;
    'updated_at'?: Date | null;
}
export type IMembersNoId = Omit<IMembers,'id'>;
