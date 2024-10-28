import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleDetails } from '../../model/services/fetchArticleDetails/fetchArticleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleDetailsErrors } from '../../model/types/articleDetailsSchema';
import { ArticleDetailsBlocks } from './ArticleDetailsBlocks/ArticleDetailsBlocks';
import { ArticleDetailsHeader } from './ArticleDetailsHeader/ArticleDetailsHeader';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { HStack, VStack } from '@/shared/ui/depricated/Stack';
import {
    Text, TextAlign, TextColor, TextVariation,
} from '@/shared/ui/depricated/Text';

interface ArticleDetailsProps {
    id: string
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { id } = props;
    const { t } = useTranslation('article-details');
    useDynamicModuleLoad(initialReducers, true);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const errorMessages = useMemo<Record<ArticleDetailsErrors, string>>(() => ({
        [ArticleDetailsErrors.NOT_FOUND]: t('ARTICLE_NOT_FOUND'),
        [ArticleDetailsErrors.FORBIDDEN]: t('ACCESS_DENIED'),
        [ArticleDetailsErrors.SERVER_ERROR]: t('SERVER_ERROR'),
        [ArticleDetailsErrors.UNKNOWN_ERROR]: t('UNKNOWN_ERROR'),
        [ArticleDetailsErrors.NO_DATA]: t('NO_DATA'),
    }), [t]);

    useEffect(() => {
        dispatch(fetchArticleDetails(id));
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <>
                <HStack max justify="center" style={{ marginBottom: 44 }}>
                    <Skeleton width={200} height={200} radius={50} />
                </HStack>
                <VStack max gap="6">
                    <Skeleton width={500} height={37} />
                    <Skeleton width={436} height={28} />
                    <Skeleton width={60} height={20} />
                    <Skeleton width={100} height={20} />
                    <Skeleton width="100%" height={150} />
                    <Skeleton width="100%" height={60} />
                    <Skeleton width="100%" height={200} />
                    <Skeleton width="100%" height={90} />
                </VStack>
            </>
        );
    }

    if (error) {
        return (
            <Text
                text={errorMessages[error]}
                color={TextColor.RED}
                variation={TextVariation.TITLE}
                align={TextAlign.CENTER}
            />
        );
    }

    return (
        <>
            <ArticleDetailsHeader articleData={data} />
            <ArticleDetailsBlocks data={data} />
        </>
    );
};
