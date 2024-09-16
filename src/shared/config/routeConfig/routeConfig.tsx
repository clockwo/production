import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';
import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';
import { ArticlesPage } from 'pages/Articles';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { UserRole } from 'enitites/User';
import { ForbiddenPage } from 'pages/ForbiddenPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLE_DETAILS = 'article_details',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // LAST
    NOT_FOUND = '*'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLE]: '/article',
    [AppRoutes.ARTICLE_DETAILS]: '/article/', // + :id
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['*'],
        element: <NotFoundPage />,
    },

};
