import { IProfile } from 'enitites/Profile';

export interface ProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    readonly: boolean,
    error?: string
}
