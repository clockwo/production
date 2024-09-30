import { FeatureFlags } from '@/shared/types/featuresFlags';

let featuresFlags: FeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags): void => {
    if (newFeatureFlags) {
        featuresFlags = { ...featuresFlags, ...newFeatureFlags };
    }
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => featuresFlags[flag];
