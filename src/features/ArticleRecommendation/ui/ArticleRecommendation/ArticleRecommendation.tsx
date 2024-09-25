import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import { useArticleRecommendationApi } from '../../api/articleRecommendationApi';

const POST_FOR_LOAD_COUNT = 5;

export const ArticleRecommendation = () => {
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationApi(POST_FOR_LOAD_COUNT);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="16" max>
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
