import { createSelector, createFeatureSelector } from '@ngrx/store';

import { PopupStateInterface } from './popup-reducers';

export const selectLockViewport =
  createFeatureSelector<PopupStateInterface>('popup');
export const lockWebpageViewPortSelector = createSelector(
  selectLockViewport,
  (state: PopupStateInterface) => state.lockwebpageViewPort
);
