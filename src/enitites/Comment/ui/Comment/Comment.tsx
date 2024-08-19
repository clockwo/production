import classNames from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { IComment } from '../../model/types/comment';
import styles from './Comment.module.scss';

interface CommentProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

export const Comment = memo((props: CommentProps) => {
    const {
        isLoading, className, comment,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(styles.Comment, {}, [className])}>
                <div className={styles.userInfo}>
                    <Skeleton width={30} height={30} radius={50} />
                    <Skeleton width={80} height={30} />
                </div>
                <Skeleton width="100%" height={30} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.Comment, {}, [className])}>
            <AppLink to={RoutePath.profile + comment.user.id} replace>
                <div className={styles.userInfo}>
                    <Avatar size={30} url={comment.user.avatar} alt="" />
                    <Text text={comment.user.username} />
                </div>
            </AppLink>

            <Text text={comment.text} />
        </div>
    );
});
