import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/redesign/Stack';

import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { addNewCommentForArticle } from '../model/services/addNewCommentForArticle/addNewCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';

import { CommentList } from '@/entities/Comment';
import { AddNewComment } from '@/features/AddNewComment';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { Text } from '@/shared/ui/depricated/Text';

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
        <VStack gap="16" max>
            <Text title={t('Comments')} />
            <AddNewComment onSendSubmit={onSendSubmit} />
            <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
    );
});
