import i18n from '@/shared/config/i18n/i18n';

export enum ValidateUsernameStatus {
    EMPTY = 'empty',
    TOO_SHORT = 'tooShort'
}

interface IValidateStatus {
    status: boolean,
    message: string
}

const getValidationErrorMessage = (status: ValidateUsernameStatus) => {
    switch (status) {
    case ValidateUsernameStatus.EMPTY:
        return i18n.t('The username cannot be empty');
    case ValidateUsernameStatus.TOO_SHORT:
        return i18n.t('The username must be greater than 3 characters');
    default:
        return '';
    }
};

const MIN_USERNAME_LENGTH = 3;

export const validateUsername = (username: string): IValidateStatus => {
    const validateStatus: IValidateStatus = {
        status: true,
        message: '',
    };

    if (!username) {
        validateStatus.status = false;
        validateStatus.message = getValidationErrorMessage(ValidateUsernameStatus.EMPTY);

        return validateStatus;
    }
    if (username.length <= MIN_USERNAME_LENGTH) {
        validateStatus.status = false;
        validateStatus.message = getValidationErrorMessage(ValidateUsernameStatus.TOO_SHORT);

        return validateStatus;
    }

    return validateStatus;
};
