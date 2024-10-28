import { createSelector } from '@reduxjs/toolkit';

import type { ISidebarItem } from '../types/types';

import { getUserAuth } from '@/entities/User';
import AboutIcon from '@/shared/assets/svg/about.svg';
import AboutReIcon from '@/shared/assets/svg/aboutRe.svg';
import ArticlesIcon from '@/shared/assets/svg/articles.svg';
import ArticlesReIcon from '@/shared/assets/svg/articlesRe.svg';
import HomeIcon from '@/shared/assets/svg/home.svg';
import HomeReIcon from '@/shared/assets/svg/homeRe.svg';
import ProfileIcon from '@/shared/assets/svg/profile.svg';
import ProfileReIcon from '@/shared/assets/svg/profileRe.svg';
import {
    getRouteAbout, getRouteArticle, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(
    getUserAuth,
    (userData): ISidebarItem[] => {
        const sidebarItems: ISidebarItem[] = [
            {
                path: getRouteMain(),
                Icon: toggleFeatures({
                    name: 'isAppRedesign',
                    on: () => HomeReIcon,
                    off: () => HomeIcon,
                }),
                text: 'Main',
            },
            {
                path: getRouteAbout(),
                Icon: toggleFeatures({
                    name: 'isAppRedesign',
                    on: () => AboutReIcon,
                    off: () => AboutIcon,
                }),
                text: 'About',
            },
        ];

        if (userData) {
            sidebarItems.push({
                path: getRouteProfile(userData?.id || '1'),
                Icon: toggleFeatures({
                    name: 'isAppRedesign',
                    on: () => ProfileReIcon,
                    off: () => ProfileIcon,
                }),
                text: 'Profile',
                authOnly: true,
            });

            sidebarItems.push({
                path: getRouteArticle(),
                Icon: toggleFeatures({
                    name: 'isAppRedesign',
                    on: () => ArticlesReIcon,
                    off: () => ArticlesIcon,
                }),
                text: 'Articles',
                authOnly: true,
            });
        }

        return sidebarItems;
    },
);
