import { memo } from 'react';

import { IComment } from '../../model/types/comment';
import styles from './Comment.module.scss';

import { getRouteProfile } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { HStack, VStack } from '@/shared/ui/depricated/Stack';
import { Text } from '@/shared/ui/depricated/Text';

interface CommentProps {
    comment: IComment;
    isLoading?: boolean;
}

export const Comment = memo((props: CommentProps) => {
    const {
        isLoading, comment,
    } = props;

    if (isLoading) {
        return (
            <VStack gap="8" className={styles.Comment} max>
                <HStack gap="8">
                    <Skeleton width={30} height={30} radius={50} />
                    <Skeleton width={80} height={30} />
                </HStack>
                <Skeleton width="100%" height={30} />
            </VStack>
        );
    }

    return (
        <VStack gap="8" className={styles.Comment} max>
            <AppLink to={getRouteProfile(comment.user.id)} replace>
                <HStack gap="8">
                    <Avatar size={30} url={comment.user.avatar} alt="" />
                    <Text text={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
