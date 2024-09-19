import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter/ui/Counter';
import { Page } from '@/widgets/Page/ui/Page';

const Main = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('Main')}</div>
            <Counter />
        </Page>
    );
};

export default Main;
