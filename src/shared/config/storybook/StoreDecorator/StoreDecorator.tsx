import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ReducerList } from '@/shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleDetailsReducer } from '@/entities/Article/testing';

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
