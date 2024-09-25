import { IValidateProfileError } from '../../types/types';

import { IProfile } from '@/entities/Profile';

export const validateProfileErrors = (profile: IProfile | undefined) => {
    if (!profile) {
        return [IValidateProfileError.NO_DATA];
    }

    const {
        first, lastname, age, city,
    } = profile;
    const errors: IValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(IValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || age < 0) {
        errors.push(IValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(IValidateProfileError.INCORRECT_CITY);
    }

    return errors;
};
