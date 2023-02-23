import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { HomepageActions } from './homepage.actions';

export interface HomepageStateInterface {
  selectedHomepageMealTime: string;
  selectedHomepageMealPreference: string;
  selectedHomepageMealNationality: string;
}

export const initialHomepageState: HomepageStateInterface = {
  selectedHomepageMealTime: '',
  selectedHomepageMealPreference: '',
  selectedHomepageMealNationality: '',
};

export const homepageReducers = createReducer(
  initialHomepageState,
  on(
    HomepageActions.updateSelectedhomepagemealtime,
    (_state, { selectedMealTime }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['selectedHomepageMealTime'] = selectedMealTime;
      return tempObject;
    }
  ),
  on(
    HomepageActions.updateSelectedhomepagemealpreference,
    (_state, { selectedHomepageMealPreference }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['selectedHomepageMealPreference'] =
        selectedHomepageMealPreference;
      return tempObject;
    }
  ),
  on(
    HomepageActions.updateSelectedhomepagemealnationality,
    (_state, { selectedMealNationality }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['selectedHomepageMealNationality'] = selectedMealNationality;
      return tempObject;
    }
  )
);
