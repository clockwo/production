import { EntityState } from '@reduxjs/toolkit';
import { ArticleType, ArticleView, IArticle } from 'enitites/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'enitites/Article/model/types/types';

export interface ArticlePageSchema extends EntityState<IArticle, string> {
    isLoading: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
