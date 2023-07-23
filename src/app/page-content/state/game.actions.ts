import { createAction, props } from '@ngrx/store';
import { Frames } from 'src/app/models/game.model';

export const ADD_ROLL = '[Roll] Add Roll';
export const RESET_ROLL = '[Roll] Reset Roll';

export const addFrameRoll = createAction(ADD_ROLL, props<{ frame: Frames }>());
export const resetFrameRoll = createAction(RESET_ROLL);
