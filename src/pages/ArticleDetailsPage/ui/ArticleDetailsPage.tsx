import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleDetailsComments } from '@/widgets/ArticleDetailsComments';
import { Page } from '@/widgets/Page/ui/Page';
import { ArticleRecommendation } from '@/features/ArticleRecommendation';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const ArticleDetailsPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();

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
                <ArticleRecommendation />
                <ArticleDetailsComments articleId={id} />
            </VStack>
        </Page>
    );
};

export default ArticleDetailsPage;
