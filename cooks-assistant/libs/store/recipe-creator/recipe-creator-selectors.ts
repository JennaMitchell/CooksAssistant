import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RecipeCreatorStateInterface } from './recipe-creator-reducers';
export const selectRecipeCreatorStore =
  createFeatureSelector<RecipeCreatorStateInterface>('recipeCreator');

export const selectedRecipeCreatorBackground = createSelector(
  selectRecipeCreatorStore,
  (state: RecipeCreatorStateInterface) => state.selectedBackground
);
