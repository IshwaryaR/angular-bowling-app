import { createAction, props } from '@ngrx/store';
import { Posts } from 'src/app/models/frame.model';

export const ADD_ROLL = '[Roll] Add Roll';
export const RESET_ROLL = '[Roll] Reset Roll';

export const addFrameRoll = createAction(ADD_ROLL, props<{ frame: Posts }>());
export const resetFrameRoll = createAction(RESET_ROLL);
