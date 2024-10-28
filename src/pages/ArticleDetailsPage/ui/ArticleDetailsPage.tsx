import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendation } from '@/features/ArticleRecommendation';
import { getFeatureFlag, ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/depricated/Stack';
import { Text } from '@/shared/ui/depricated/Text';
import { ArticleDetailsComments } from '@/widgets/ArticleDetailsComments';
import { Page } from '@/widgets/Page';

const ArticleDetailsPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    if (!id) {
        return (
            <Page>
                <Text text={t("This article doesn't exists")} />
            </Page>
        );
    }

    return (
        <Page>
            <VStack gap="16" max>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ToggleFeatures
                    feature="isArticleRatingEnabled"
                    on={<ArticleRating articleId={id} />}
                    off={<div>Тут что-то будет!</div>}
                />
                <ArticleRecommendation />
                <ArticleDetailsComments articleId={id} />
            </VStack>
        </Page>
    );
};

export default ArticleDetailsPage;
