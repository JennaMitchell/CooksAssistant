import { Component } from '@angular/core';

import { HomepageApiCallServiceFunctions } from '../../utilities/api-call-functions/homepage-api-call-functions/homepage-api-call-functions.service';
import { Store } from '@ngrx/store';

import { lockWebpageViewPortSelector } from 'libs/store/popups/popup-selectors';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HomepageApiCallServiceFunctions],
})
export class Homepage {
  lockWebpageViewPortStoreValue$ = this.store.select(
    lockWebpageViewPortSelector
  );
  lockWebpageViewPort: boolean = true;

  constructor(
    private homepageApiActions: HomepageApiCallServiceFunctions,
    private store: Store
  ) {}

  loginPopupActive: any;

  getValueFromSubscript(value: boolean) {
    this.lockWebpageViewPort = value;
  }

  tempButtonHandler() {
    this.homepageApiActions
      .addNewRecipe({
        title: 'Roasted Chicken breast with cherry',
        cookingTimeInMinutes: '20',
        tags: ['Gluten', 'Spicy', 'Veggies', 'Dinner'],
        imageUrl: 'assets/images/food/basamic-chicken.jpg',
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.lockWebpageViewPortStoreValue$.subscribe((value) => {
      this.lockWebpageViewPort = value;
    });
  }
}
