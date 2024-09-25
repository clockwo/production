import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuth } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';

interface ArticleRatingProps {
    articleId: string;
}

export const ArticleRating = (props: ArticleRatingProps) => {
    const { articleId } = props;
    const user = useSelector(getUserAuth);
    const { isLoading, data: articleRating } = useArticleRating({ articleId, userId: user?.id ?? '' });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        if (!user?.id) return;
        rateArticleMutation({
            userId: user.id,
            articleId,
            rate: starsCount,
            feedback,
        });
    }, [articleId, rateArticleMutation, user?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={150} />
        );
    }

    return (
        <RatingCard
            title="Оцените статью"
            feedBackTitle="Оставьте свой отзыв о статье, это поможет улучшить качество"
            hasFeedBack
            rating={articleRating?.[0]?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    );
};
