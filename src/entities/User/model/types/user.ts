import { JsonSettings } from './jsonSettings';

import { FeatureFlags } from '@/shared/types/featuresFlags';

export enum UserRole {
    MANAGER = 'MANAGER',
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export interface User {
    id: string,
    username: string,
    avatar?: string,
    roles?: UserRole[],
    features?: FeatureFlags
    jsonSettings: JsonSettings
}

export interface UserSchema {
    authData?: User;
    _inited: boolean
}
