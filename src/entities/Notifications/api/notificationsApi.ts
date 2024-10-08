import { Notification } from '../model/types/notification';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
