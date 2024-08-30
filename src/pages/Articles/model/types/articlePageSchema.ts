import { EntityState } from '@reduxjs/toolkit';
import { ArticleView, IArticle } from 'enitites/Article';

export interface ArticlePageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;

    view: ArticleView;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    _inited: boolean;
}
