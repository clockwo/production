import type {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
    ThunkExtraArg,
} from './config/StateSchema';
import type { AppDispatch } from './config/store';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    AppDispatch,
    createReduxStore,
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    StoreProvider,
    ThunkConfig,
    ThunkExtraArg,
};
