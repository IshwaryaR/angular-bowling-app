import { FrameState, PostsState, ScoreState } from 'src/app/models/frame.model';

export interface AppState {
  posts: PostsState;
  framecount: FrameState;
  totalscore: ScoreState;
}
