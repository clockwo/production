import { memo } from 'react';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/svg/eye.svg';
import CalendarIcon from '@/shared/assets/svg/calendar.svg';
import { IArticle } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleDetailsHeader.module.scss';

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
