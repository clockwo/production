import { useTranslation } from 'react-i18next';
import { Counter } from 'enitites/Counter/ui/Counter';

const Main = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>{t('Main')}</div>
            <Counter />
        </>
    );
};

export default Main;
