import { props, createActionGroup } from '@ngrx/store';

export const PopupActions = createActionGroup({
  source: 'Popup',
  events: {
    'Update LockWebpageViewPort': props<{ lock: boolean }>(),
  },
});
