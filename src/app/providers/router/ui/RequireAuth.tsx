import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { JSX } from 'react';
import { getUserAuth } from '@/entities/User';
import { getRouteMain } from '@/shared/const/router';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserAuth);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    return children;
};
