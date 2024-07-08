import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { SpinnerLoader } from 'shared/ui/SpinnerLoader/SpinnerLoader';

function AppRouter() {
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
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="flex-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
