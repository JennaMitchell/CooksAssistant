import { props, createActionGroup } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'auth',
  events: {
    'Update Username': props<{ username: string }>(),
    'Update Token': props<{ token: string }>(),
    'Update LoggedIn': props<{ loggedIn: boolean }>(),
  },
});
