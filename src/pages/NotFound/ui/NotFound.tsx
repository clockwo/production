import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './NotFound.module.scss';

import classNames from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = ({ className = '' }) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NotFound, {}, [className])}>
            {t('Page Not Found')}
        </Page>
    );
};

export default NotFound;
