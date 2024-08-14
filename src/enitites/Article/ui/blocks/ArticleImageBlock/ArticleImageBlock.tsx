import classNames from 'shared/lib/classNames/classNames';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string;
}

export const ArticleImageBlock = (props: ArticleImageBlockProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
            123
        </div>
    );
};
