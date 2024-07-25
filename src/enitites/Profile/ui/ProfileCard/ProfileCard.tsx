import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextColor } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { IProfile } from '../../model/types/types';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: IProfile,
    isLoading: boolean,
    error?: string
    isReadonly: boolean
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { t } = useTranslation();
    const {
        className, data, isLoading, error, isReadonly,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {
                [cls.loading]: true,
            }, [className])}
            >
                <SpinnerLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {
                [cls.loading]: true,
            }, [className])}
            >
                <Text
                    title={t('An error occurred while loading a profile')}
                    text={t('Try reloading the page')}
                    color={TextColor.RED}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>

            <div className={cls.data}>
                <Input value={data?.first} label={t('Firstname')} readonly={isReadonly} />
                <Input value={data?.lastname} label={t('Lastname')} readonly={isReadonly} />
            </div>
        </div>
    );
};
