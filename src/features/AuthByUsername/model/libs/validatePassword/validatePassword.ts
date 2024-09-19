import i18n from '@/shared/config/i18n/i18n';

export enum ValidatePasswordStatus {
    EMPTY = 'empty',
    TOO_SHORT = 'tooShort',
    HAS_SPECIAL_SYMBOL = 'hasSpecialSymbol'
}

interface IValidateStatus {
    status: boolean,
    message: string
}

const getValidationErrorMessage = (status: ValidatePasswordStatus) => {
    switch (status) {
    case ValidatePasswordStatus.EMPTY:
        return i18n.t('The password cannot be empty');
    case ValidatePasswordStatus.TOO_SHORT:
        return i18n.t('The password must be greater than 3 characters');
    case ValidatePasswordStatus.HAS_SPECIAL_SYMBOL:
        return i18n.t('The password must has special symbol');
    default:
        return '';
    }
};

const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
const MIN_PASSWORD_LENGTH = 3;

export const validatePassword = (password: string): IValidateStatus => {
    const validateStatus: IValidateStatus = {
        status: true,
        message: '',
    };

    if (!password) {
        validateStatus.status = false;
        validateStatus.message = getValidationErrorMessage(ValidatePasswordStatus.EMPTY);

        return validateStatus;
    }
    if (password.length <= MIN_PASSWORD_LENGTH) {
        validateStatus.status = false;
        validateStatus.message = getValidationErrorMessage(ValidatePasswordStatus.TOO_SHORT);

        return validateStatus;
    }

    if (!specialCharRegex.test(password)) {
        validateStatus.status = false;
        validateStatus.message = getValidationErrorMessage(ValidatePasswordStatus.HAS_SPECIAL_SYMBOL);

        return validateStatus;
    }

    return validateStatus;
};
