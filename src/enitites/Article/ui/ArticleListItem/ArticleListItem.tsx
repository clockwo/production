import classNames from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import EyeIcon from 'shared/assets/svg/eye.svg';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleTextBlock } from 'enitites/Article/ui/blocks/ArticleTextBlock/ArticleTextBlock';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './ArticleListItem.module.scss';
import {
    ArticleBlockType, ArticleView, IArticle, ITextBlock,
} from '../../model/types/types';

interface ArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [navigate, article.id]);

    const mods = {
        [styles[view]]: true,
    };

    if (view === ArticleView.BIG) {
        const articleText = article.blocks.find((article) => article.type === ArticleBlockType.TEXT) as ITextBlock;

        return (
            <div className={classNames(styles.ArticleListItem, mods, [className])}>
                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <div className={styles.user}>
                            <Avatar
                                size={30}
                                url={article.user.avatar}
                                alt=""
                            />
                            <Text text={article.user.username} />
                        </div>
                        <Text text={article.createdAt} />
                    </div>
                    <Text title={article.title} />
                    <Text text={article.type.join(', ')} />
                </div>
                <img className={styles.image} src={article.img} height={178} alt="" />
                <div className={styles.bottomInfo}>
                    {articleText
                        && <ArticleTextBlock className={styles.textBlock} paragraphs={articleText.paragraphs} />}

                    <div className={styles.bottomSection}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>Читать далее...</Button>
                        <div className={styles.viewers}>
                            {article.views}
                            <EyeIcon />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div onClick={onOpenArticle} className={classNames(styles.ArticleListItem, mods, [className])}>
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
