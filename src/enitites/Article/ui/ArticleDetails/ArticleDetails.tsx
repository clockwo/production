import classNames from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticleDetails, {}, [className])}>
            ArticleDetails
        </div>
    );
};
