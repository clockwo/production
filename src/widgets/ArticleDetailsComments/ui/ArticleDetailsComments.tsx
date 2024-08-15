import { memo, useEffect } from 'react';
import { CommentList } from 'enitites/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import styles from './ArticleDetailsComments.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

interface ArticleDetailsCommentsProps {
    articleId: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { articleId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useDynamicModuleLoad(reducers, true);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    }, [dispatch, articleId]);

    const comments = useSelector(getArticleComments.selectAll);

    return (
        <div className={styles.ArticleDetailsComments}>
            <Text title={t('Comments')} />
            <CommentList comments={comments} />
        </div>
    );
});
