import classNames from 'shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { ProfileCard } from 'enitites/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import cls from './EditableProfileCard.module.scss';
import { profileReducer } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';

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

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const isReadonly = useSelector(getProfileReadonly);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <ProfileCard data={data} isLoading={isLoading} isReadonly={isReadonly} />
        </div>
    );
};
