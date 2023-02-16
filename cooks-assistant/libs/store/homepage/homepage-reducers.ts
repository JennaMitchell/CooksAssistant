import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { HomepageActions } from './homepage.actions';

export interface HomepageStateInterface {
  selectedHomepageMealTime: string;
  selectedHomepageMealType: string;
  selectedHomepageMealNationality: string;
}

export const initialHomepageState: HomepageStateInterface = {
  selectedHomepageMealTime: '',
  selectedHomepageMealType: '',
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
    HomepageActions.updateSelectedhomepagemealtype,
    (_state, { selectedMealType }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['selectedHomepageMealType'] = selectedMealType;
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
