import classNames from 'shared/lib/classNames/classNames';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer } from 'enitites/Profile';
import cls from './Profile.module.scss';

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const Profile = () => {
    useDynamicModuleLoad(initialReducers, true);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(getProfileData());
    // }, [dispatch]);

    return (
        <div className={classNames(cls.Profile)}>
            Profile page
        </div>
    );
};
export default Profile;
