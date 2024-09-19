import { createSelector } from '@reduxjs/toolkit';
import { getUserAuth } from '@/entities/User';

import HomeIcon from '@/shared/assets/svg/home.svg';
import AboutIcon from '@/shared/assets/svg/about.svg';
import ProfileIcon from '@/shared/assets/svg/profile.svg';
import ArticlesIcon from '@/shared/assets/svg/articles.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import type { ISidebarItem } from '../types/types';

export const getSidebarItems = createSelector(
    (getUserAuth),
    (userData): ISidebarItem[] => {
        const sidebarItems: ISidebarItem [] = [
            {
                path: RoutePath.main,
                Icon: HomeIcon,
                text: 'Main',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About',
            },
        ];

        if (userData) {
            sidebarItems.push({
                path: `${RoutePath.profile}${userData?.id || 1}`,
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
            });

            sidebarItems.push({
                path: RoutePath.article,
                Icon: ArticlesIcon,
                text: 'Articles',
                authOnly: true,
            });
        }

        return sidebarItems;
    },
);
