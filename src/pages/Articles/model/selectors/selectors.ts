import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageNumber = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited ?? false;

export const getArticlePageSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.CREATED;
export const getArticlePageOrder = (state: StateSchema) => state.articlePage?.order ?? SortOrder.ASC;
export const getArticlePageSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const getArticlePageType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL;
