import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from 'src/app/models/frame.model';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getFrames = createSelector(
  getPostsState,
  (state: PostsState) => state.posts
);
