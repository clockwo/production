import { memo, useCallback, useEffect } from 'react';
import { CommentList } from 'enitites/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { AddNewComment } from 'features/AddNewComment';
import { addNewCommentForArticle } from '../model/services/addNewCommentForArticle/addNewCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import styles from './ArticleDetailsComments.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';

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
    const isLoading = useSelector(getArticleCommentsIsLoading);

    const onSendSubmit = useCallback(async () => {
        const result = await dispatch(addNewCommentForArticle());

        if (result.meta.requestStatus === 'fulfilled') {
            dispatch(fetchCommentsByArticleId(articleId));
        }
    }, [dispatch, articleId]);

    return (
        <div className={styles.ArticleDetailsComments}>
            <Text title={t('Comments')} />
            <AddNewComment onSendSubmit={onSendSubmit} />
            <CommentList isLoading={isLoading} comments={comments} />
        </div>
    );
});
