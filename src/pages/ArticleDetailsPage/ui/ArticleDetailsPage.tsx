import { ArticleDetails } from 'enitites/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    if (!id) {
        return (
            <Text text={t("This article doesn't exists")} />
        );
    }

    return (
        <ArticleDetails id={id} />
    );
};

export default ArticleDetailsPage;
