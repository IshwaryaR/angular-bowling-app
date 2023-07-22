import { Action, createReducer, on } from '@ngrx/store';
import { addFrameCount, resetFrameCount } from './framecount.actions';

const initialState = {
  framecount: 1,
};
const _counterReducer = createReducer(
  initialState,
  on(addFrameCount, (state) => {
    return { ...state, framecount: state.framecount + 1 };
  }),
  on(resetFrameCount, (state) => {
    return { ...state, framecount: 1 };
  })
);

export function counterReducer(
  state: { framecount: number } | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
