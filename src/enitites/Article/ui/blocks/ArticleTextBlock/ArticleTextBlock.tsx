import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import styles from './ArticleTextBlock.module.scss';
import { ITextBlock } from '../../../model/types/types';

export const ArticleTextBlock = memo((props: Partial<ITextBlock>) => {
    const { title, paragraphs } = props;

    return (
        <div className={styles.ArticleTextBlock}>
            {title && <Text title={title} />}
            {paragraphs?.map((paragraph) => <Text key={paragraph} text={paragraph} />)}
        </div>
    );
});
