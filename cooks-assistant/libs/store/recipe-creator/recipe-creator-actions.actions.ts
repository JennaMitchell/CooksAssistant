import { props, createActionGroup } from '@ngrx/store';
import { RecipeTemplateUserDataInterface } from './recipe-creator-reducers';

export const RecipeCreatorActions = createActionGroup({
  source: 'RecipeCreator',
  events: {
    'Update BackgroundSelected': props<{ selectedBackground: number }>(),
    'Update RecipeTemplateUserData': props<{
      recipeTemplateUserData: RecipeTemplateUserDataInterface;
    }>(),
    'Update UserHasEnteredData': props<{ userHasEnteredData: boolean }>(),
  },
});
