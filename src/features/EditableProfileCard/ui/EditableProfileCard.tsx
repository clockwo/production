import classNames from 'shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { ProfileCard } from 'enitites/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EditableProfileHeader } from 'features/EditableProfileCard/ui/EditableProfileHeader/EditableProfileHeader';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import cls from './EditableProfileCard.module.scss';
import { profileReducer } from '../model/slice/profileSlice';

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
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileHeader />
            <ProfileCard data={data} isLoading={isLoading} error={error} isReadonly={isReadonly} />
        </div>
    );
};
