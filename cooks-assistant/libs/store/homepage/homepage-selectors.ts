import { createSelector, createFeatureSelector } from '@ngrx/store';

import { HomepageStateInterface } from './homepage-reducers';

export const selectHomepageStore =
  createFeatureSelector<HomepageStateInterface>('homepage');

export const selectedHomepageMealTimeSelector = createSelector(
  selectHomepageStore,
  (state: HomepageStateInterface) => state.selectedHomepageMealTime
);

export const selectedHomepageMealPreferenceSelector = createSelector(
  selectHomepageStore,
  (state: HomepageStateInterface) => state.selectedHomepageMealPreference
);

export const selectedHomepageMealNationalitySelector = createSelector(
  selectHomepageStore,
  (state: HomepageStateInterface) => state.selectedHomepageMealNationality
);
