export interface Frames {
  id?: string;
  firstroll: number;
  secondroll: number;
  thirdroll?: number;
  score: number;
}
export interface GameState {
  frames: Frames[];
}

export interface FrameCountState {
  framecount: number;
}

export interface ScoreState {
  totalscore: number;
}
