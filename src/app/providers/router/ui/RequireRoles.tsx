import { JSX, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserRoles, UserRole } from '@/entities/User';
import { getRouteForbidden } from '@/shared/const/router';

interface RequireRolesProps {
    children: JSX.Element;
    roles?: UserRole[]
}

export const RequireRoles = (props: RequireRolesProps) => {
    const { roles, children } = props;
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRole = useMemo(() => {
        if (!roles?.length) return true;

        return userRoles?.some((role) => roles?.includes(role));
    }, [userRoles, roles]);

    if (!hasRequiredRole) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
};
