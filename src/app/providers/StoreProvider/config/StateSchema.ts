import type { CounterSchema } from 'enitites/Counter';
import type { UserSchema } from 'enitites/User';
import type { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsSchema } from 'enitites/Article';
import { ArticleDetailsCommentsSchema } from 'widgets/ArticleDetailsComments';
import { AddNewCommentSchema } from 'features/AddNewComment';
import { ArticlePageSchema } from 'pages/Articles';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { ArticleDetailsRecommendsSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema

    // Async reducers
    login?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addNewComment?: AddNewCommentSchema
    articlePage?: ArticlePageSchema
    articleDetailsRecommends?: ArticleDetailsRecommendsSchema;
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
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}
