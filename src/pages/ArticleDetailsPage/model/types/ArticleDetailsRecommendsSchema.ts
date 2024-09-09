import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'enitites/Article';

export interface ArticleDetailsRecommendsSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
}
