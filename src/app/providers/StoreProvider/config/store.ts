import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'enitites/Counter';
import { userReducer } from 'enitites/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/ReducerManager';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
