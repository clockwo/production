import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Text, TextVariation } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { IProfile } from '../../model/types/types';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: IProfile,
    isLoading: boolean,
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { t } = useTranslation();
    const { className, data, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {
                [cls.loading]: isLoading,
            }, [className])}
            >
                <SpinnerLoader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text variation={TextVariation.TITLE} text={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} />
                <Input value={data?.lastname} />
            </div>
        </div>
    );
};
