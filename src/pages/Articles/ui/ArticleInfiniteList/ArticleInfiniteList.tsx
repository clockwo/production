import { useSelector } from 'react-redux';

import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../../model/selectors/selectors';
import { getArticleList } from '../../model/slice/ArticlePageSlice';

import { ArticleList } from '@/entities/Article';

export const ArticleInfiniteList = () => {
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);
    const articles = useSelector(getArticleList.selectAll);

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
        />
    );
};
