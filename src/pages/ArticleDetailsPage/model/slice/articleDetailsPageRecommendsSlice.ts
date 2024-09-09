import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IArticle } from 'enitites/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendsSchema } from '../types/ArticleDetailsRecommendsSchema';

const recommendationAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

const articleDetailsPageRecommendsSlice = createSlice({
    name: 'articleDetailsPageRecommends',
    initialState: recommendationAdapter.getInitialState<ArticleDetailsRecommendsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},

    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommends || recommendationAdapter.getInitialState(),
);

export const { actions: articleDetailsPageRecommendsActions } = articleDetailsPageRecommendsSlice;
export const { reducer: articleDetailsPageRecommendsReducer } = articleDetailsPageRecommendsSlice;
