import { IArticle } from './types';

export enum ArticleDetailsErrors {
    NOT_FOUND = 'NOT_FOUND',
    FORBIDDEN = 'FORBIDDEN',
    SERVER_ERROR = 'SERVER_ERROR',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    NO_DATA = 'NO_DATA'
}

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: ArticleDetailsErrors;
    data?: IArticle
}
