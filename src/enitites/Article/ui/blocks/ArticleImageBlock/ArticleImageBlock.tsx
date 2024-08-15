import { IImageBlock } from 'enitites/Article/model/types/types';
import styles from './ArticleImageBlock.module.scss';

export const ArticleImageBlock = (props: Partial<IImageBlock>) => {
    const { src, title } = props;

    return (
        <figure className={styles.ArticleImageBlock}>
            <img src={src} alt="" />
            {title && <figcaption>{title}</figcaption>}
        </figure>
    );
};
