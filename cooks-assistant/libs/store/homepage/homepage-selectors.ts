import { createSelector, createFeatureSelector } from '@ngrx/store';

import { HomepageStateInterface } from './homepage-reducers';

export const selectMomepageMealTime =
  createFeatureSelector<HomepageStateInterface>('homepage');
export const homepageMealTimeSelector = createSelector(
  selectMomepageMealTime,
  (state: HomepageStateInterface) => state.selectedHomepageMealTime
);
