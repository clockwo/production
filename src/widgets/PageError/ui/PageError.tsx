import { useTranslation } from 'react-i18next';

import cls from './PageError.module.scss';

import classNames from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError)}>
            <div className={cls.wrapper}>
                <h1 className={cls.title}>{t('Something went wrong')}</h1>
                <Button onClick={reloadPage}>
                    {t('Reload page')}
                </Button>
            </div>
        </div>
    );
};
