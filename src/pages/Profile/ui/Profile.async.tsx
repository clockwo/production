import { lazy } from 'react';

export const ProfileAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./Profile')), 2000);
}));
