import classNames from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import EyeIcon from 'shared/assets/svg/eye.svg';
import { Text } from 'shared/ui/Text/Text';
import styles from './ArticleListItem.module.scss';
import { ArticleView, IArticle } from '../../model/types/types';

interface ArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticleView;
    isLoading: boolean;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        isLoading,
    } = props;

    const mods = {
        [styles[view]]: true,
    };

    return (
        <div className={classNames(styles.ArticleListItem, mods, [className])}>
            <img className={styles.image} src={article.img} alt="" />
            <Text className={styles.createdAt} text={article.createdAt} />
            <div className={styles.cardBottom}>
                <div className={styles.cardInfo}>
                    <Text className={styles.cardTags} text={article.type.join(', ')} />
                    <div className={styles.viewers}>
                        {article.views}
                        <EyeIcon />
                    </div>
                </div>
                <Text className={styles.title} text={article.title} />
            </div>
        </div>
    );
});
