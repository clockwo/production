import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/depricated/Button';
import { HStack } from '@/shared/ui/depricated/Stack';
import { Text, TextSize } from '@/shared/ui/depricated/Text';

interface EditableProfileHeaderProps {
    isEditor: boolean
}

export const EditableProfileHeader = (props: EditableProfileHeaderProps) => {
    const { isEditor } = props;
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
            if (data?.id) {
                dispatch(updateProfileData(data.id));
            }
        } else {
            dispatch(profileActions.cancelEdit());
        }
    };

    return (
        <HStack justify="between" max>
            <Text size={TextSize.L} title={t('Profile')} />
            {
                isEditor && (
                    isReadonly
                        ? (
                            <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L} onClick={onEditClick}>
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <HStack gap="16">
                                <Button theme={ButtonTheme.OUTLINE_RED} size={ButtonSize.L} onClick={onCancelClick}>
                                    {t('Cancel')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L} onClick={onSaveClick}>
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )
                )
            }
        </HStack>
    );
};
