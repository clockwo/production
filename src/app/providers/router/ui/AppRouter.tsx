import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <div className="flex-wrapper">
                {route.element}
            </div>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>
                            {element}
                        </RequireAuth>
                    ) : route.element
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={(
            <div className="flex-wrapper">
                <PageLoader>
                    <SpinnerLoader />
                </PageLoader>
            </div>
        )}
        >
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);
