import { createAction } from '@ngrx/store';

export const ADD_FRAME = '[Roll] Add Frame count';
export const RESET_FRAME = '[Roll] Reset Frame count';

export const addFrameCount = createAction(ADD_FRAME);
export const resetFrameCount = createAction(RESET_FRAME);
