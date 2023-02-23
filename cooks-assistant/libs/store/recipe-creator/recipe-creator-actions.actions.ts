import { props, createActionGroup } from '@ngrx/store';

export const RecipeCreatorActions = createActionGroup({
  source: 'RecipeCreator',
  events: {
    'Update BackgroundSelected': props<{ selectedBackground: number }>(),
  },
});
