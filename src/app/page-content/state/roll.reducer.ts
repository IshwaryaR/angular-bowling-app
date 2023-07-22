import { Action, createReducer, on } from '@ngrx/store';
import { PostsState } from 'src/app/models/frame.model';
import { addFrameRoll, resetFrameRoll } from './roll.actions';

const initialState: PostsState = {
  posts: [],
};

const _postReducer = createReducer(
  initialState,
  on(addFrameRoll, (state, action) => {
    let frameResult = { ...action.frame };
    frameResult.id = 'Frame ' + (state.posts.length + 1);
    let posts = [...state.posts, frameResult];
    return { posts };
  }),
  on(resetFrameRoll, () => {
    return { ...initialState };
  })
);

export function rollReducer(state: any, action: Action) {
  return _postReducer(state, action);
}
