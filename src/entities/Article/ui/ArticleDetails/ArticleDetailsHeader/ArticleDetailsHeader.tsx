import { memo } from 'react';

import { IArticle } from '../../../model/types/types';
import styles from './ArticleDetailsHeader.module.scss';

import CalendarIcon from '@/shared/assets/svg/calendar.svg';
import EyeIcon from '@/shared/assets/svg/eye.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';

interface ArticleDetailsHeaderProps extends Partial<IArticle> {
    className?: string;
    articleData?: Omit<IArticle, 'type' | 'blocks'>
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
    const { className, articleData } = props;

    return (
        <VStack gap="4" max>
            <Avatar url={articleData?.img} alt="Article avatar" size={200} className={styles.avatar} />
            <Text title={articleData?.title} text={articleData?.subtitle} align={TextAlign.LEFT} size={TextSize.L} />
            <HStack gap="6">
                <EyeIcon />
                <Text text={articleData?.views.toString()} />
            </HStack>
            <HStack gap="6">
                <CalendarIcon />
                <Text text={articleData?.createdAt} />
            </HStack>
        </VStack>
    );
});
