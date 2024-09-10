import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'enitites/Counter';
import { userReducer } from 'enitites/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/ReducerManager';
import { $api } from 'shared/api/api';
import { ScrollSaveReducer } from 'features/ScrollSave';
import { StateSchema, ThunkExtraArg } from './StateSchema';

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
        }),
    });

    return { ...store, reducerManager };
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
