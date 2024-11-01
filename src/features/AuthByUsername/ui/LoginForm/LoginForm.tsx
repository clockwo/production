import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { validatePassword } from '../../model/libs/validatePassword/validatePassword';
import { validateUsername } from '../../model/libs/validateUsername/validateUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useDynamicModuleLoad } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { DotsLoader } from '@/shared/ui/depricated/DotsLoader';
import { Input } from '@/shared/ui/depricated/Input';
import { Text, TextColor, TextVariation } from '@/shared/ui/depricated/Text';

const initialReducers: ReducerList = {
    login: loginReducer,
};

interface LoginFormProps {
    setClose: () => void
}

const LoginForm = memo(({ setClose }: LoginFormProps) => {
    const { t } = useTranslation('login');
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const { theme } = useTheme();

    const [usernameErrorMessage, setUsernameErrorMessage] = useState<string | undefined>(undefined);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | undefined>(undefined);

    useDynamicModuleLoad(initialReducers, true);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginSubmit = useCallback(async () => {
        let isValid = true;
        setUsernameErrorMessage(undefined);
        setPasswordErrorMessage(undefined);
        const userStatus = validateUsername(username);
        const passwordStatus = validatePassword(password);

        if (!userStatus.status) {
            setUsernameErrorMessage(userStatus.message);
            isValid = false;
        }
        if (!passwordStatus.status) {
            setPasswordErrorMessage(passwordStatus.message);
            isValid = false;
        }

        if (!isValid) return;

        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            setClose();
        }
    }, [dispatch, username, password]);

    return (
        <div className={cls.LoginForm}>
            {error
                && (
                    <Text text={error} variation={TextVariation.TITLE} color={TextColor.RED} />
                )}
            <Input
                value={username}
                onChange={onChangeUserName}
                errorMessage={usernameErrorMessage}
                placeHolderText={t('Email')}
                autoFocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                errorMessage={passwordErrorMessage}
                placeHolderText={t('Password')}
            />
            <Button onClick={onLoginSubmit} theme={ButtonTheme.BACKGROUND_INVERTED} disabled={isLoading}>
                {isLoading ? <DotsLoader theme={theme} /> : t('Login')}
            </Button>
        </div>
    );
});

export default LoginForm;
