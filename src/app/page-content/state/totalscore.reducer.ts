import { Action, createReducer, on } from '@ngrx/store';
import { addTotalScore, resetTotalScore } from './totalscore.actions';

const initialState = {
  totalscore: 0,
};
const _scoreReducer = createReducer(
  initialState,
  on(addTotalScore, (state, action) => {
    return { ...state, totalscore: action.totalscore };
  }),
  on(resetTotalScore, (state) => {
    return { ...state, totalscore: 0 };
  })
);

export function scoreReducer(
  state: { totalscore: number } | undefined,
  action: Action
) {
  return _scoreReducer(state, action);
}
