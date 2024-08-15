import classNames from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { IComment } from '../../model/types/comment';
import styles from './Comment.module.scss';

interface CommentProps {
    className?: string;
    comment: IComment
}

export const Comment = memo((props: CommentProps) => {
    const {
        className, comment,
    } = props;

    return (
        <div className={classNames(styles.Comment, {}, [className])}>
            <div className={styles.userInfo}>
                <Avatar size={30} url={comment.user.avatar} alt="" />
                <Text text={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
