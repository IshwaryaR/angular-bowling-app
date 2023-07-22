import { createAction, props } from '@ngrx/store';

export const ADD_SCORE = '[Roll] Add Total Score';
export const RESET_SCORE = '[Roll] Reset Total Score';

export const addTotalScore = createAction(
  ADD_SCORE,
  props<{ totalscore: number }>()
);
export const resetTotalScore = createAction(RESET_SCORE);
