import { useTranslation } from 'react-i18next';
import { Counter } from 'enitites/Counter/ui/Counter';
import { Page } from 'shared/ui/Page/Page';

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
