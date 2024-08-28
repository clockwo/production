import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articlePage?.error;
export const getArticleView = (state: StateSchema) => state.articlePage?.view;
