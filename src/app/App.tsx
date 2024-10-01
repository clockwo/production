import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import classNames from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (

        <ToggleFeatures
            feature="isAppRedesign"
            on={(
                <div className={classNames('app_re', { hovered: true })}>
                    <Suspense fallback="">
                        <MainLayout header={<Navbar />} content={<AppRouter />} sidebar={<Sidebar />} />
                    </Suspense>
                </div>
            )}
            off={(
                <div className={classNames('app', { hovered: true })}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            )}
        />

    );
}

export default App;
