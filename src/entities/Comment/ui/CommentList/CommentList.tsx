import { memo } from 'react';
import { Comment } from '../Comment/Comment';
import { VStack } from '@/shared/ui/Stack';
import { IComment } from '../../model/types/comment';

interface CommentListProps {
    comments: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { comments, isLoading } = props;

    return (
        <VStack gap="8" max>
            {comments.map((comment) => (
                <Comment isLoading={isLoading} comment={comment} key={comment.id} />
            ))}
        </VStack>
    );
});
