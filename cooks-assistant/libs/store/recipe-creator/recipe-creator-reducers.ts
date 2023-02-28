import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { RecipeCreatorActions } from './recipe-creator-actions.actions';

export interface RecipeTemplateUserDataInterface {
  title: string;
  quote: string;
  servings: string;
  prepTime: string;
  cookingTime: string;
  ingredientsList: string[];
  directionsList: string[];
  notes: string[];
}

export interface RecipeCreatorStateInterface {
  selectedBackground: number;
  recipeTemplateUserData: RecipeTemplateUserDataInterface;
  userHasEnteredData: boolean;
}

export const initialRecipeCreatorState: RecipeCreatorStateInterface = {
  selectedBackground: 0,
  recipeTemplateUserData: {
    title: '',
    quote: '',
    servings: '',
    prepTime: '',
    cookingTime: '',
    ingredientsList: [''],
    directionsList: [''],
    notes: [''],
  },
  userHasEnteredData: false,
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
  ),
  on(
    RecipeCreatorActions.updateRecipetemplateuserdata,
    (_state, { recipeTemplateUserData }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['recipeTemplateUserData'] = recipeTemplateUserData;
      return tempObject;
    }
  ),
  on(
    RecipeCreatorActions.updateUserhasentereddata,
    (_state, { userHasEnteredData }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['userHasEnteredData'] = userHasEnteredData;
      return tempObject;
    }
  )
);
