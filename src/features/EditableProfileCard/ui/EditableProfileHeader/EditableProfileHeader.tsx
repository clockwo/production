import { Text, TextVariation } from 'shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileHeader.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileHeaderProps {
    className?: string;
}

export const EditableProfileHeader = () => {
    const { t } = useTranslation();
    const isReadonly = useSelector(getProfileReadonly);
    const form = useSelector(getProfileForm);
    const data = useSelector(getProfileData);

    const dispatch = useAppDispatch();

    const onEditClick = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const onCancelClick = () => {
        dispatch(profileActions.cancelEdit());
    };

    const onSaveClick = () => {
        if (JSON.stringify(form) !== JSON.stringify(data)) {
            dispatch(updateProfileData());
        } else {
            dispatch(profileActions.cancelEdit());
        }
    };

    return (
        <div className={cls.header}>
            <Text variation={TextVariation.TITLE} text={t('Profile')} />
            {
                isReadonly
                    ? (
                        <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L} onClick={onEditClick}>
                            {t('Edit')}
                        </Button>
                    )
                    : (
                        <div className={cls.buttons}>
                            <Button theme={ButtonTheme.OUTLINE_RED} size={ButtonSize.L} onClick={onCancelClick}>
                                {t('Cancel')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L} onClick={onSaveClick}>
                                {t('Save')}
                            </Button>
                        </div>
                    )
            }
        </div>
    );
};
