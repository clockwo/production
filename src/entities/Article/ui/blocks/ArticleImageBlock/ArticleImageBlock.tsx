import { memo } from 'react';
import { IImageBlock } from '../../../model/types/types';
import styles from './ArticleImageBlock.module.scss';

export const ArticleImageBlock = memo((props: Partial<IImageBlock>) => {
    const { src, title } = props;

    return (
        <figure className={styles.ArticleImageBlock}>
            <img src={src} alt="" />
            {title && <figcaption>{title}</figcaption>}
        </figure>
    );
});
