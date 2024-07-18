import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import { ReducerList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { validatePassword } from 'features/AuthByUsername/model/libs/validatePassword/validatePassword';
import { Text, TextColor, TextVariation } from 'shared/ui/Text/Text';
import { DotsLoader } from 'shared/ui/DotsLoader/DotsLoader';
import { useTheme } from 'app/providers/ThemeProvider';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { validateUsername } from '../../model/libs/validateUsername/validateUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

const initialReducers: ReducerList = {
    login: loginReducer,
};

const LoginForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const { theme } = useTheme();

    const [usernameErrorMessage, setUsernameErrorMessage] = useState<string | null>(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | null>(null);

    useDynamicModuleLoad(initialReducers, true);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginSubmit = useCallback(() => {
        let isValid = true;
        setUsernameErrorMessage(null);
        setPasswordErrorMessage(null);
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

        dispatch(loginByUsername({ username, password }));
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
