import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'enitites/Article';

export interface ArticleDetailsRecommendsSchema extends EntityState<IArticle, string> {
    isLoading?: boolean;
    error?: string;
}
