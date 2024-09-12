import { rtkApi } from 'shared/api/rtkApi';
import { IArticle } from 'enitites/Article';

const recommendationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<IArticle[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticleRecommendationApi = recommendationApi.useGetArticleRecommendationListQuery;
