import classNames from 'shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { ProfileCard } from 'enitites/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EditableProfileHeader } from 'features/EditableProfileCard/ui/EditableProfileHeader/EditableProfileHeader';
import { Currency } from 'enitites/Currency';
import { Country } from 'enitites/Country';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import cls from './EditableProfileCard.module.scss';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';

interface EditableProfileCardProps {
    className?: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    useDynamicModuleLoad(initialReducers, true);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const isReadonly = useSelector(getProfileReadonly) ?? true;
    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: number | string) => {
        if (/^\d+$/.test(String(value)) || !value) {
            dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
        }
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileHeader />
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
                isReadonly={isReadonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};
