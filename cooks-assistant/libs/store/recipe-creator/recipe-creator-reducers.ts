import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { RecipeCreatorActions } from './recipe-creator-actions.actions';

export interface RecipeCreatorStateInterface {
  selectedBackground: number;
}

export const initialRecipeCreatorState: RecipeCreatorStateInterface = {
  selectedBackground: 0,
};

export const recipeCreatorReducers = createReducer(
  initialRecipeCreatorState,
  on(
    RecipeCreatorActions.updateBackgroundselected,
    (_state, { selectedBackground }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['selectedHomepageMealTime'] = selectedBackground;
      return tempObject;
    }
  )
);
