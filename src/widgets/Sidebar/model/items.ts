import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React from 'react';
import HomeIcon from 'shared/assets/svg/home.svg';
import AboutIcon from 'shared/assets/svg/about.svg';
import ProfileIcon from 'shared/assets/svg/profile.svg';

export interface ISidebarItem {
    text: string,
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: ISidebarItem[] = [
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
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
    },
];
