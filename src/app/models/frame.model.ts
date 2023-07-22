export interface Posts {
  id?: string;
  firstroll: number;
  secondroll: number;
  thirdroll?: number;
  score: number;
}
export interface PostsState {
  posts: Posts[];
}

export interface FrameState {
  framecount: number;
}

export interface ScoreState {
  totalscore: number;
}
