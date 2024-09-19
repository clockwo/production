import { EntityState } from '@reduxjs/toolkit';
import { ArticleType, ArticleView, IArticle } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

import { ArticleSortField } from '@/entities/Article/model/consts/consts';

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
