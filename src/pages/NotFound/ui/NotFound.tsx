import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = ({ className = '' }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFound, {}, [className])}>
            {t('Page Not Found')}
        </div>
    );
};

export default NotFound;
