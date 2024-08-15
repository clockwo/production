import { IComment } from 'enitites/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
