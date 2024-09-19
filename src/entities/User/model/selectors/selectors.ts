import { StateSchema } from '@/app/providers/StoreProvider';

export const selectUserId = (state: StateSchema) => state.user.authData?.id;
