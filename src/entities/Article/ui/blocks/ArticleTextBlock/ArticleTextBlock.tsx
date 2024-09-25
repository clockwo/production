import { memo } from 'react';

import { ITextBlock } from '../../../model/types/types';
import styles from './ArticleTextBlock.module.scss';

import classNames from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockProps extends Partial<ITextBlock> {
    className?: string;
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { title, paragraphs, className } = props;

    return (
        <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
            {title && <Text title={title} />}
            {paragraphs?.map((paragraph) => <Text key={paragraph} text={paragraph} />)}
        </div>
    );
});
