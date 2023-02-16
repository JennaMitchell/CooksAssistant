import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthStateInterface } from './auth-reducers';

export const selectAuthStore =
  createFeatureSelector<AuthStateInterface>('auth');
export const usernameSelector = createSelector(
  selectAuthStore,
  (state: AuthStateInterface) => state.username
);

export const tokenSelector = createSelector(
  selectAuthStore,
  (state: AuthStateInterface) => state.token
);

export const loggedInSelector = createSelector(
  selectAuthStore,
  (state: AuthStateInterface) => state.loggedIn
);
