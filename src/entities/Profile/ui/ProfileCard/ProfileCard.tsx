import { CSSProperties, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IProfile } from '../../model/types/types';
import cls from './ProfileCard.module.scss';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import classNames from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { SpinnerLoader } from '@/shared/ui/SpinnerLoader';
import { Text, TextAlign, TextColor } from '@/shared/ui/Text';

interface ProfileCardProps {
    className?: string,
    data?: IProfile,
    isLoading: boolean,
    error?: string
    isReadonly: boolean
    onChangeFirstname: (value?: string) => void
    onChangeLastname: (value?: string) => void
    onChangeCity: (value: string) => void
    onChangeAge: (value: string | number) => void
    onChangeAvatar: (value: string) => void
    onChangeCurrency: (value: Currency) => void
    onChangeCountry: (value: Country) => void

}

const selectStyles: CSSProperties = {
    justifyContent: 'space-between',
    paddingInline: '2rem',
};

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        data,
        isLoading,
        error,
        isReadonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity, onChangeAge,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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
                <Avatar url={data?.avatar} alt="User Avatar" size={128} />
                <div className={cls.wrapper}>
                    <Input
                        value={data?.first}
                        onChange={onChangeFirstname}
                        label={t('Firstname')}
                        readonly={isReadonly}
                    />
                    <Input
                        value={data?.lastname}
                        onChange={onChangeLastname}
                        label={t('Lastname')}
                        readonly={isReadonly}
                    />
                </div>
                <div className={cls.wrapper}>
                    <Input value={data?.city} onChange={onChangeCity} label={t('City')} readonly={isReadonly} />
                    <Input value={data?.age} onChange={onChangeAge} label={t('Age')} readonly={isReadonly} />
                </div>
                <Input value={data?.avatar} onChange={onChangeAvatar} label={t('Avatar')} readonly={isReadonly} />
                <div className={cls.wrapper} style={selectStyles}>
                    <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={isReadonly} />
                    <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={isReadonly} />
                </div>
            </div>
        </div>
    );
};
