import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const Main = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('Main')}</div>
            <StarRating />
        </Page>
    );
};

export default Main;
