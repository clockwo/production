import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRouteProps, routeConfig } from '../model/routeConfig';
import { RequireAuth } from '../ui/RequireAuth';
import { RequireRoles } from '../ui/RequireRoles';

import { SpinnerLoader } from '@/shared/ui/SpinnerLoader';
import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';

function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={(
                <Page>
                    <PageLoader>
                        <SpinnerLoader width={200} padding={15} />
                    </PageLoader>
                </Page>
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
