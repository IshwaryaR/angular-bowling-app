import {
  FrameCountState,
  GameState,
  ScoreState,
} from 'src/app/models/game.model';

export interface AppState {
  frames: GameState;
  framecount: FrameCountState;
  totalscore: ScoreState;
}
