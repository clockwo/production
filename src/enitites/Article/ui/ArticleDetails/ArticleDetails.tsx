import classNames from 'shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    Text, TextAlign, TextColor, TextSize, TextVariation,
} from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/svg/eye.svg';
import CalendarIcon from 'shared/assets/svg/calendar.svg';

import { ArticleBlock, ArticleBlockType } from 'enitites/Article/model/types/types';
import { ArticleCodeBlock } from 'enitites/Article/ui/blocks/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from 'enitites/Article/ui/blocks/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from 'enitites/Article/ui/blocks/ArticleTextBlock/ArticleTextBlock';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleDetailsErrors } from '../../model/types/articleDetailsSchema';
import styles from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleDetails } from '../../model/services/fetchArticleDetails/fetchArticleDetails';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className, id } = props;
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

    const getBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlock code={block.code} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlock src={block.src} title={block.title} />;
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlock
                    paragraphs={block.paragraphs}
                    title={block.title}
                />
            );
        default:
            return null;
        }
    }, []);

    if (isLoading) {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
                    <Skeleton width={200} height={200} radius={50} />
                </div>
                <div style={{ display: 'grid', gap: 5 }}>
                    <Skeleton width={500} height={37} />
                    <Skeleton width={436} height={28} />
                    <Skeleton width={60} height={20} />
                    <Skeleton width={100} height={20} />
                    <Skeleton width="100%" height={150} />
                    <Skeleton width="100%" height={60} />
                </div>
            </>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                <Text
                    text={errorMessages[error]}
                    color={TextColor.RED}
                    variation={TextVariation.TITLE}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticleDetails, {}, [className])}>
            <div className={styles.header}>
                <Avatar url={data?.img} alt="Article avatar" size={200} className={styles.avatar} />
                <Text title={data?.title} text={data?.subtitle} align={TextAlign.LEFT} size={TextSize.L} />
                <div className={styles.articleInfo}>
                    <EyeIcon />
                    <Text text={data?.views.toString()} />
                </div>
                <div className={styles.articleInfo}>
                    <CalendarIcon />
                    <Text text={data?.createdAt} />
                </div>
            </div>
            <div className={styles.blocks}>
                {data?.blocks.map(getBlock)}
            </div>
        </div>
    );
};
