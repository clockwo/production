import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { getCommentText } from '../model/selectors/selectors';
import { AddNewCommentActions, AddNewCommentReducer } from '../model/slice/AddNewCommentSlice';
import styles from './AddNewComment.module.scss';

interface AddNewCommentProps {
    className?: string;
    onSendSubmit: () => void;
}

const initialReducers: ReducerList = {
    addNewComment: AddNewCommentReducer,
};

export const AddNewComment = (props: AddNewCommentProps) => {
    useDynamicModuleLoad(initialReducers, true);
    const { className, onSendSubmit } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const commentText = useSelector(getCommentText);

    const onInputChange = useCallback((value: string) => {
        dispatch(AddNewCommentActions.setText(value));
    }, [dispatch]);

    const onButtonClick = useCallback(() => {
        onSendSubmit();
        dispatch(AddNewCommentActions.setText(''));
    }, [dispatch, onSendSubmit]);

    return (
        <div className={classNames(styles.AddNewComment, {}, [className])}>
            <Input onChange={onInputChange} value={commentText} label={t('Add new comment')} />
            <Button
                onClick={onButtonClick}
                size={ButtonSize.M}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {t('Submit')}
            </Button>
        </div>
    );
};
