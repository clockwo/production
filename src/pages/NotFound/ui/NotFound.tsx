import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';
import cls from './NotFound.module.scss';

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
