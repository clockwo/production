import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

export const useDynamicModuleLoad = (key: StateSchemaKey, reducer: Reducer) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` });

        return () => {
            store.reducerManager.remove(key);
            dispatch({ type: `@DESTROY ${key} reducer` });
        };
    }, []);
};
