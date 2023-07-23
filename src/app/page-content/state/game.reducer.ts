import { Action, createReducer, on } from '@ngrx/store';
import { GameState } from 'src/app/models/game.model';
import { addFrameRoll, resetFrameRoll } from './game.actions';

const initialState: GameState = {
  frames: [],
};

const _postReducer = createReducer(
  initialState,
  on(addFrameRoll, (state, action) => {
    let frameResult = { ...action.frame };
    frameResult.id = 'Frame ' + (state.frames.length + 1);
    let frames = [...state.frames, frameResult];
    return { frames };
  }),
  on(resetFrameRoll, () => {
    return { ...initialState };
  })
);

export function gameReducer(state: any, action: Action) {
  return _postReducer(state, action);
}
