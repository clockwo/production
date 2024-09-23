import { createSelector } from '@reduxjs/toolkit';
import { getUserAuth } from '@/entities/User';

import HomeIcon from '@/shared/assets/svg/home.svg';
import AboutIcon from '@/shared/assets/svg/about.svg';
import ProfileIcon from '@/shared/assets/svg/profile.svg';
import ArticlesIcon from '@/shared/assets/svg/articles.svg';
import type { ISidebarItem } from '../types/types';
import {
    getRouteAbout, getRouteArticle, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    (getUserAuth),
    (userData): ISidebarItem[] => {
        const sidebarItems: ISidebarItem [] = [
            {
                path: getRouteMain(),
                Icon: HomeIcon,
                text: 'Main',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'About',
            },
        ];

        if (userData) {
            sidebarItems.push({
                path: getRouteProfile(userData?.id || '1'),
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
            });

            sidebarItems.push({
                path: getRouteArticle(),
                Icon: ArticlesIcon,
                text: 'Articles',
                authOnly: true,
            });
        }

        return sidebarItems;
    },
);
