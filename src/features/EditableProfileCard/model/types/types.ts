import { IProfile } from 'enitites/Profile';

export enum IValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    readonly: boolean,
    error?: string
    form?: IProfile
    validateError?: IValidateProfileError[]
}
