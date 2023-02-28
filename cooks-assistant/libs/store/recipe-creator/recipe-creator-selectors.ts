import { createSelector, createFeatureSelector } from '@ngrx/store';
import {
  RecipeCreatorStateInterface,
  RecipeTemplateUserDataInterface,
} from './recipe-creator-reducers';

export const selectRecipeCreatorStore =
  createFeatureSelector<RecipeCreatorStateInterface>('recipeCreator');

export const selectedRecipeCreatorBackground = createSelector(
  selectRecipeCreatorStore,
  (state: RecipeCreatorStateInterface) => state.selectedBackground
);
export const selectedRecipeTemplateUserData = createSelector(
  selectRecipeCreatorStore,
  (state: RecipeCreatorStateInterface) => state.recipeTemplateUserData
);
