import type { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleArgs {
    userId: string;
    articleId: string;
}

interface RateArticleArgs {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleArgs>({
            query: ({ articleId, userId }) => ({
                url: '/article-rating',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArgs>({
            query: (args) => ({
                url: '/article-rating',
                method: 'POST',
                body: args,
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
