import { memo, useCallback } from 'react';

import { ArticleBlockType } from '../../../model/consts/consts';
import { ArticleBlock, IArticle } from '../../../model/types/types';
import { ArticleCodeBlock } from '../../blocks/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../../blocks/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../../blocks/ArticleTextBlock/ArticleTextBlock';
import styles from './ArticleDetailsBlocks.module.scss';

interface ArticleDetailsBlocksProps {
    data?: Pick<IArticle, 'blocks'>
}

export const ArticleDetailsBlocks = memo((props: ArticleDetailsBlocksProps) => {
    const { data } = props;

    const getBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlock key={block.id} code={block.code} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlock key={block.id} src={block.src} title={block.title} />;
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlock
                    key={block.id}
                    paragraphs={block.paragraphs}
                    title={block.title}
                />
            );
        default:
            return null;
        }
    }, []);

    return (
        <div className={styles.ArticleDetailsBlocks}>
            {data?.blocks.map(getBlock)}
        </div>
    );
});
