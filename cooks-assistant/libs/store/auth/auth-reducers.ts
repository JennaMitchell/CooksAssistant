import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { AuthActions } from './auth.actions';

export interface AuthStateInterface {
  token: string;
  username: string;
  loggedIn: boolean;
}

export const initialAuthState: AuthStateInterface = {
  token: '',
  username: '',
  loggedIn: false,
};

export const popupReducers = createReducer(
  initialAuthState,
  on(AuthActions.updateLoggedin, (_state, { loggedIn }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['loggedIn'] = loggedIn;
    return tempObject;
  }),
  on(AuthActions.updateToken, (_state, { token }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['token'] = token;
    return tempObject;
  }),
  on(AuthActions.updateUsername, (_state, { username }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['username'] = username;
    return tempObject;
  })
);
