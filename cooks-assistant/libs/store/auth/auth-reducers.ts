import { createReducer, on } from '@ngrx/store';
// import { HomepageApiActions } from './homepage.actions';
import { AuthActions } from './auth.actions';

export interface UserRatedRecipeEntryInterface {
  recipeId: string;
  rating: number;
}
export interface AuthStateInterface {
  token: string;
  username: string;
  email: string;
  loggedIn: boolean;
  userId: string;
  recipesRatedIdsArray: UserRatedRecipeEntryInterface[];
  recipesCreatedIdsArray: string[];
}

export const initialAuthState: AuthStateInterface = {
  token: '',
  username: '',
  email: '',
  loggedIn: false,
  userId: '',
  recipesRatedIdsArray: [],
  recipesCreatedIdsArray: [],
};

export const authReducers = createReducer(
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
  }),
  on(AuthActions.updateEmail, (_state, { email }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['email'] = email;
    return tempObject;
  }),
  on(AuthActions.updateUserid, (_state, { userId }) => {
    const tempObject = JSON.parse(JSON.stringify(_state));
    tempObject['userId'] = userId;
    return tempObject;
  }),
  on(
    AuthActions.updateRecipesratedidarray,
    (_state, { recipesRatedIdArray }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['recipesRatedIdArray'] = recipesRatedIdArray;
      return tempObject;
    }
  ),
  on(
    AuthActions.updateRecipescreatedidsarray,
    (_state, { recipesCreatedIdsArray }) => {
      const tempObject = JSON.parse(JSON.stringify(_state));
      tempObject['recipesCreatedIdsArray'] = recipesCreatedIdsArray;
      return tempObject;
    }
  )
);
