import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentText = (state: StateSchema) => state.addNewComment?.commentText;
