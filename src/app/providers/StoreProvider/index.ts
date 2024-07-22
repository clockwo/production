import { StoreProvider } from './ui/StoreProvider';
import type { AppDispatch } from './config/store';
import { createReduxStore } from './config/store';
import type {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
    ThunkExtraArg,
} from './config/StateSchema';

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
