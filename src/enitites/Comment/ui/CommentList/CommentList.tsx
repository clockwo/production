import classNames from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from 'enitites/Comment/ui/Comment/Comment';
import styles from './CommentList.module.scss';
import { IComment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {comments.map((comment) => (
                <Comment isLoading={isLoading} comment={comment} key={comment.id} />
            ))}
        </div>
    );
});
