import { useSelector } from 'react-redux';
import { getUserRoles, UserRole } from 'enitites/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { JSX, useMemo } from 'react';

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
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
};
