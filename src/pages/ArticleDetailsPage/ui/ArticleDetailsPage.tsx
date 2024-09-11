import { ArticleDetails } from 'enitites/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleDetailsComments } from 'widgets/ArticleDetailsComments';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/ui/Page';
import { ArticleRecommendation } from 'features/ArticleRecommendation';

const ArticleDetailsPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

    if (!id) {
        return (
            <Page>
                <Text text={t("This article doesn't exists")} />
            </Page>
        );
    }

    return (
        <Page>
            <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>Вернуться к постам</Button>
            <ArticleDetails id={id} />
            <ArticleRecommendation />
            <ArticleDetailsComments articleId={id} />
        </Page>
    );
};

export default ArticleDetailsPage;
