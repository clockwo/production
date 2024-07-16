import type { CounterSchema } from 'enitites/Counter';
import type { UserSchema } from 'enitites/User';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
}
