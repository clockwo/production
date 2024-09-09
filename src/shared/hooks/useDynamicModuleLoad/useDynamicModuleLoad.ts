import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

export const useDynamicModuleLoad = (
    reducers: ReducerList,
    removeAfterUnmount?: boolean,
) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([key, reducer]) => {
            const mounted = mountedReducers[key as StateSchemaKey];
            if (mounted !== reducer) {
                store.reducerManager.add(key as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                // eslint-disable-next-line no-unused-vars
                Object.entries(reducers).forEach(([key, reducer]) => {
                    store.reducerManager.remove(key as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${key} reducer` });
                });
            }
        };
    }, []);
};
