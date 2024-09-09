import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendsError = (state: StateSchema) => state.articleDetailsRecommends?.error ?? '';
export const getArticleDetailsRecommendsIsLoading = (state: StateSchema) => state.articleDetailsRecommends?.isLoading ?? false;
