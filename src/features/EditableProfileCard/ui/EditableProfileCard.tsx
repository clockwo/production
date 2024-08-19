import classNames from 'shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { ProfileCard } from 'enitites/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EditableProfileHeader } from 'features/EditableProfileCard/ui/EditableProfileHeader/EditableProfileHeader';
import { Currency } from 'enitites/Currency';
import { Country } from 'enitites/Country';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import cls from './EditableProfileCard.module.scss';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { IValidateProfileError } from '../model/types/types';
import { canEditProfile } from '../model/selectors/canEditProfile/canEditProfile';

interface EditableProfileCardProps {
    className?: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    useDynamicModuleLoad(initialReducers, true);
    const { id } = useParams();

    const isEditor = useSelector(canEditProfile);
    console.log(isEditor);
    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const validateErrorTranslates = {
        [IValidateProfileError.INCORRECT_AGE]: t('The age provided is incorrect. Please enter a valid age.'),
        [IValidateProfileError.INCORRECT_USER_DATA]:
            t('The user data provided is incorrect. Please check and re-enter the information.'),
        [IValidateProfileError.INCORRECT_CITY]: t('The city provided is incorrect. Please enter a valid city name.'),
        [IValidateProfileError.SERVER_ERROR]: t('A server error occurred. Please try again later.'),
        [IValidateProfileError.NO_DATA]: t('No data available. Please provide the necessary information.'),
    };

    const isReadonly = useSelector(getProfileReadonly) ?? true;
    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);

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
            {isEditor && <EditableProfileHeader />}
            {
                validateErrors?.length && (
                    validateErrors.map((validateError) => (
                        <Text
                            key={validateError}
                            text={validateErrorTranslates[validateError]}
                            color={TextColor.RED}
                        />
                    ))
                )
            }
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
