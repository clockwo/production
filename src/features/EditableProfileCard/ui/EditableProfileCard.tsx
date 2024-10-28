import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { canEditProfile } from '../model/selectors/canEditProfile/canEditProfile';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { IValidateProfileError } from '../model/types/types';
import { EditableProfileHeader } from '../ui/EditableProfileHeader/EditableProfileHeader';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { VStack } from '@/shared/ui/depricated/Stack';
import { Text, TextColor } from '@/shared/ui/depricated/Text';

interface EditableProfileCardProps {
    id: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    useDynamicModuleLoad(initialReducers, true);

    const isEditor = useSelector(canEditProfile);
    useEffect(() => {
        dispatch(fetchProfileData(id));
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
        <VStack gap="16">
            <EditableProfileHeader isEditor={isEditor} />
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
        </VStack>
    );
};
