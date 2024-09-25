import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { createReducerManager } from '../config/ReducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { ScrollSaveReducer } from '@/features/ScrollSave';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        // Not async reducers below
        counter: counterReducer,
        user: userReducer,
        scrollSave: ScrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);
    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    return { ...store, reducerManager };
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
