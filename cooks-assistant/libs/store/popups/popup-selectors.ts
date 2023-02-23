import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import { AppStateInterface } from '../app-interface';

import { PopupStateInterface } from './popup-reducers';

export const selectPopupStateSlice =
  createFeatureSelector<PopupStateInterface>('popup');
export const lockWebpageViewPortSelector = createSelector(
  selectPopupStateSlice,
  (state) => {
    return state.lockwebpageViewPort;
  }
);

export const loginPopupActiveSelector = createSelector(
  selectPopupStateSlice,
  (state) => {
    return state.loginPopupActive;
  }
);

export const signupPopupActiveSelector = createSelector(
  selectPopupStateSlice,
  (state) => {
    return state.signupPopupActive;
  }
);
export const recipeCreatorBackgroundPopupActiveSelector = createSelector(
  selectPopupStateSlice,
  (state) => {
    return state.recipeCreatorBackgroundPopupActive;
  }
);

export const updateTemplateTextPopupActiveSelector = createSelector(
  selectPopupStateSlice,
  (state) => {
    return state.updateTemplateTextPopupActive;
  }
);

export const updateTemplateTextPopupDataSelector = createSelector(
  selectPopupStateSlice,
  (state) => {
    return state.updateTemplateTextPopupData;
  }
);
