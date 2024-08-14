import classNames from 'shared/lib/classNames/classNames';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
}

export const ArticleTextBlock = (props: ArticleTextBlockProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
            123
        </div>
    );
};
