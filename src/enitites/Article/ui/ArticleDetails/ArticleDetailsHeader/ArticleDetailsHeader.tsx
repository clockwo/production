import classNames from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/svg/eye.svg';
import CalendarIcon from 'shared/assets/svg/calendar.svg';
import { IArticle } from 'enitites/Article';
import { memo } from 'react';
import styles from './ArticleDetailsHeader.module.scss';

interface ArticleDetailsHeaderProps extends Partial<IArticle> {
    className?: string;
    articleData?: Omit<IArticle, 'type' | 'blocks'>
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
    const { className, articleData } = props;

    return (
        <div className={classNames(styles.ArticleDetailsHeader, {}, [className])}>
            <Avatar url={articleData?.img} alt="Article avatar" size={200} className={styles.avatar} />
            <Text title={articleData?.title} text={articleData?.subtitle} align={TextAlign.LEFT} size={TextSize.L} />
            <div className={styles.articleInfo}>
                <EyeIcon />
                <Text text={articleData?.views.toString()} />
            </div>
            <div className={styles.articleInfo}>
                <CalendarIcon />
                <Text text={articleData?.createdAt} />
            </div>
        </div>
    );
});
