import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from 'src/app/models/game.model';

const getGameState = createFeatureSelector<GameState>('frames');

export const getFrames = createSelector(
  getGameState,
  (state: GameState) => state.frames
);
