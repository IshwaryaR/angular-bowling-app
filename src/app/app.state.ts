import { PostsState } from './models/frame.model';

export interface AppState {
  posts: PostsState;
  reset: number;
}
