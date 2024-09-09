import { ArticleDetails, ArticleList, ArticleView } from 'enitites/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleDetailsComments } from 'widgets/ArticleDetailsComments';
import { useCallback, useEffect } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/ui/Page';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    articleDetailsPageRecommendsReducer,
    getArticleRecommendations,
} from '../model/slice/articleDetailsPageRecommendsSlice';
import {
    getArticleDetailsRecommendsError,
    getArticleDetailsRecommendsIsLoading,
} from '../model/selectors/articleDetailsRecommendsSelectors';

const reducers: ReducerList = {
    articleDetailsRecommends: articleDetailsPageRecommendsReducer,
};

const ArticleDetailsPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    useDynamicModuleLoad(reducers, true);
    const dispatch = useAppDispatch();
    const recommendationIsLoading = useSelector(getArticleDetailsRecommendsIsLoading);
    const recommendationError = useSelector(getArticleDetailsRecommendsError);
    const recommendations = useSelector(getArticleRecommendations.selectAll);

    useEffect(() => {
        dispatch(fetchArticleRecommendations());
    }, [dispatch]);

    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

    if (!id) {
        return (
            <Page>
                <Text text={t("This article doesn't exists")} />
            </Page>
        );
    }

    return (
        <Page>
            <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>Вернуться к постам</Button>
            <ArticleDetails id={id} />
            <Text title={t('Recommends')} />
            <ArticleList
                target="_blank"
                isLoading={recommendationIsLoading}
                articles={recommendations}
                view={ArticleView.SMALL}
            />
            <ArticleDetailsComments articleId={id} />
        </Page>
    );
};

export default ArticleDetailsPage;
