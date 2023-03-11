import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { PopupActions } from './popup.actions';
export interface TemplateTextPopupDataInterface {
  fieldType: string;
  fieldIndex: number;
  currentValue: string;
  newValue: string;
  popupTitle: string;
}

export interface PopupStateInterface {
  lockwebpageViewPort: boolean;
  loginPopupActive: boolean;
  signupPopupActive: boolean;
  recipeCreatorBackgroundPopupActive: boolean;
  changeRecipeTemplatePopupActive: boolean;
  errorPopupActive: boolean;
  errorMessage: string;
  recipeTagsPopupActive: boolean;
}

export const initialPopupState: PopupStateInterface = {
  lockwebpageViewPort: false,
  loginPopupActive: false,
  signupPopupActive: false,
  recipeCreatorBackgroundPopupActive: false,
  changeRecipeTemplatePopupActive: false,
  errorPopupActive: false,
  errorMessage: '',
  recipeTagsPopupActive: false,
};

export const popupReducers = createReducer(
  initialPopupState,
  on(PopupActions.updateLockwebpageviewport, (_state, { lock }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['lockwebpageViewPort'] = lock;
    return tempObject;
  }),
  on(PopupActions.updateLoginpopupactive, (_state, { loginPopupActive }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['loginPopupActive'] = loginPopupActive;
    return tempObject;
  }),
  on(PopupActions.updateSignuppopupactive, (_state, { signupPopupActive }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['signupPopupActive'] = signupPopupActive;
    return tempObject;
  }),
  on(
    PopupActions.updateRecipecreatorbackgroundpopupactive,
    (_state, { recipeCreatorBackgroundPopupActive }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['recipeCreatorBackgroundPopupActive'] =
        recipeCreatorBackgroundPopupActive;
      return tempObject;
    }
  ),
  on(
    PopupActions.updateChangerecipetemplatepopupactive,
    (_state, { changeRecipeTemplatePopupActive }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['changeRecipeTemplatePopupActive'] =
        changeRecipeTemplatePopupActive;
      return tempObject;
    }
  ),
  on(PopupActions.updateErrorpopupactive, (_state, { errorPopupActive }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['errorPopupActive'] = errorPopupActive;
    return tempObject;
  }),
  on(PopupActions.updateErrormessage, (_state, { errorMessage }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['errorMessage'] = errorMessage;
    return tempObject;
  }),
  on(
    PopupActions.updateRecipetagspopupactive,
    (_state, { recipeTagsPopupActive }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['recipeTagsPopupActive'] = recipeTagsPopupActive;
      return tempObject;
    }
  )
);
