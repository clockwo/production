import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { JSX } from 'react';
import { getUserAuth } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserAuth);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
