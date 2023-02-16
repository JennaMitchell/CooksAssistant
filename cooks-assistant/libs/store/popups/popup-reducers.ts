import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { PopupActions } from './popup.actions';

export interface PopupStateInterface {
  lockwebpageViewPort: boolean;
}

export const initialPopupState: PopupStateInterface = {
  lockwebpageViewPort: false,
};

export const popupReducers = createReducer(
  initialPopupState,
  on(PopupActions.updateLockwebpageviewport, (_state, { lock }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['lockwebpageViewPort'] = lock;
    return tempObject;
  })
);
