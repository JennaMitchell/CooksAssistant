import { props, createActionGroup } from '@ngrx/store';

export const HomepageActions = createActionGroup({
  source: 'Homepage',
  events: {
    'Update SelectedHomepageMealTime': props<{ selectedMealTime: string }>(),
    'Update SelectedHomepageMealType': props<{ selectedMealType: string }>(),
    'Update SelectedHomepageMealNationality': props<{
      selectedMealNationality: string;
    }>(),
  },
});

export const HomepageApiActions = createActionGroup({
  source: 'Homeapge API',
  events: {
    'Retrive Homepage Data': props<{ dataHere: ReadonlyArray<string[]> }>(),
  },
});
