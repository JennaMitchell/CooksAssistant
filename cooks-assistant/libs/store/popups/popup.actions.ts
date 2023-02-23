import { props, createActionGroup } from '@ngrx/store';
import { TemplateTextPopupDataInterface } from './popup-reducers';
export const PopupActions = createActionGroup({
  source: 'popup',
  events: {
    'Update LockWebpageViewPort': props<{ lock: boolean }>(),
    'Update LoginPopupActive': props<{ loginPopupActive: boolean }>(),
    'Update SignupPopupActive': props<{ signupPopupActive: boolean }>(),
    'Update RecipeCreatorBackgroundPopupActive': props<{
      recipeCreatorBackgroundPopupActive: boolean;
    }>(),
    'Update TemplateTextPopupActive': props<{
      updateTemplateTextPopupActive: boolean;
    }>(),
    'Update TemplateTextPopupData': props<{
      templateTextPopupData: TemplateTextPopupDataInterface;
    }>(),
  },
});
