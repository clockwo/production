import { User } from 'enitites/User';

export interface IComment {
    id: string;
    user: User
    text: string;
}
