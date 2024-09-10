import { IComment } from 'enitites/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<IComment, string> {
    isLoading?: boolean;
    error?: string;
}
