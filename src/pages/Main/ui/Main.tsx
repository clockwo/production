import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

const Main = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('Main')}</div>
        </Page>
    );
};

export default Main;
