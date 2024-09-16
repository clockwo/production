import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { RequireRoles } from 'app/providers/router/ui/RequireRoles';

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={(
                <PageLoader>
                    <SpinnerLoader width={200} padding={15} />
                </PageLoader>
            )}
            >
                {route.element}
            </Suspense>

        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>
                            <RequireRoles roles={route.roles}>
                                {element}
                            </RequireRoles>
                        </RequireAuth>
                    ) : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
}

export default memo(AppRouter);
