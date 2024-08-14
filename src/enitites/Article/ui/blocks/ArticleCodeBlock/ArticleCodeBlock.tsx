import classNames from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string;
}

export const ArticleCodeBlock = (props: ArticleCodeBlockProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
            123
        </div>
    );
};
