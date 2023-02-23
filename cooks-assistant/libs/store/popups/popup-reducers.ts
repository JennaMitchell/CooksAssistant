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
  updateTemplateTextPopupActive: boolean;
  updateTemplateTextPopupData: TemplateTextPopupDataInterface;
}

export const initialPopupState: PopupStateInterface = {
  lockwebpageViewPort: false,
  loginPopupActive: false,
  signupPopupActive: false,
  recipeCreatorBackgroundPopupActive: false,
  updateTemplateTextPopupActive: false,
  updateTemplateTextPopupData: {
    fieldType: 'title',
    fieldIndex: 0,
    currentValue: 'Chicken Salad',
    newValue: '',
    popupTitle: 'Update Title',
  },
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
    PopupActions.updateTemplatetextpopupdata,
    (_state, { templateTextPopupData }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['updateTemplateTextPopupData'] = templateTextPopupData;
      return tempObject;
    }
  ),
  on(
    PopupActions.updateTemplatetextpopupactive,
    (_state, { updateTemplateTextPopupActive }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['updateTemplateTextPopupActive'] =
        updateTemplateTextPopupActive;
      return tempObject;
    }
  )
);
