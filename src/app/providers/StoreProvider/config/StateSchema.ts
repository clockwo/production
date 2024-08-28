import type { CounterSchema } from 'enitites/Counter';
import type { UserSchema } from 'enitites/User';
import type { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsSchema } from 'enitites/Article';
import { ArticleDetailsCommentsSchema } from 'widgets/ArticleDetailsComments';
import { AddNewCommentSchema } from 'features/AddNewComment';
import { ArticlePageSchema } from 'pages/Articles';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Async reducers
    login?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addNewComment?: AddNewCommentSchema
    articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}
