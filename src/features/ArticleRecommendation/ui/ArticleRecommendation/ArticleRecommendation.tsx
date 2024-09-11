import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'enitites/Article';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationApi } from '../../api/articleRecommendationApi';

export const ArticleRecommendation = () => {
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationApi(4);

    if (isLoading) {
        return null;
    }

    return (
        <VStack gap="16">
            <Text title={t('Recommends')} />
            <ArticleList
                target="_blank"
                isLoading={isLoading}
                articles={articles}
                view={ArticleView.SMALL}
            />
        </VStack>
    );
};
