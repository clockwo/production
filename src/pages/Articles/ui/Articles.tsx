import classNames from 'shared/lib/classNames/classNames';
import styles from './Articles.module.scss';

interface ArticleProps {
    className?: string;
}

const Articles = (props: ArticleProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.Article, {}, [className])}>
            Articles
        </div>
    );
};

export default Articles;
