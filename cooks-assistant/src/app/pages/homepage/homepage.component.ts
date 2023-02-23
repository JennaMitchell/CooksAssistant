import { Component } from '@angular/core';

import { HomepageApiCallServiceFunctions } from '../../utilities/api-call-functions/homepage-api-call-functions/homepage-api-call-functions.service';
import { Store } from '@ngrx/store';

import {
  lockWebpageViewPortSelector,
  loginPopupActiveSelector,
  signupPopupActiveSelector,
} from 'libs/store/popups/popup-selectors';
import { loggedInSelector } from 'libs/store/auth/auth-selectors';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HomepageApiCallServiceFunctions],
})
export class Homepage {
  loginPopupActiveObserver$ = this.store.select(loginPopupActiveSelector);
  signupPopupActiveObserver$ = this.store.select(signupPopupActiveSelector);
  loggedInObserver$ = this.store.select(loggedInSelector);

  signupPopupActive: any;
  loginPopupActive: any;
  loggedIn: any;

  constructor(
    private homepageApiActions: HomepageApiCallServiceFunctions,
    private store: Store
  ) {}

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
    this.signupPopupActiveObserver$.subscribe((value) => {
      this.signupPopupActive = value;
    });

    this.loginPopupActiveObserver$.subscribe((value) => {
      this.loginPopupActive = value;
    });
    this.loggedInObserver$.subscribe((value) => {
      this.loggedIn = value;
    });
  }
}
