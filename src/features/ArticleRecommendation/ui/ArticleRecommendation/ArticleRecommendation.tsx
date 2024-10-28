import { useTranslation } from 'react-i18next';

import { useArticleRecommendationApi } from '../../api/articleRecommendationApi';

import { ArticleList, ArticleView } from '@/entities/Article';
import { VStack } from '@/shared/ui/depricated/Stack';
import { Text } from '@/shared/ui/depricated/Text';

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
