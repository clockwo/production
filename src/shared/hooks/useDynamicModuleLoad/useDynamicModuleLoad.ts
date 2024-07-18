import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const useDynamicModuleLoad = (
    reducers: ReducerList,
    removeAfterUnmount?: boolean,
) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            store.reducerManager.add(key, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                // eslint-disable-next-line no-unused-vars
                Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(key);
                    dispatch({ type: `@DESTROY ${key} reducer` });
                });
            }
        };
    }, []);
};
