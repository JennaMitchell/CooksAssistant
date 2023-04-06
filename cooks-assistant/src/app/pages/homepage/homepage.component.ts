import { Component } from '@angular/core';

import { HomepageApiCallServiceFunctions } from '../../utilities/api-call-functions/homepage-api-call-functions/homepage-api-call-functions.service';
import { Store } from '@ngrx/store';

import {
  errorPopupActiveSelector,
  homepageCategoryPopupActiveSelector,
  searchPopupActiveSelector,
  successPopupActiveSelector,
} from 'libs/store/popups/popup-selectors';
import { loggedInSelector } from 'libs/store/auth/auth-selectors';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [HomepageApiCallServiceFunctions],
})
export class Homepage {
  loggedInObserver$ = this.store.select(loggedInSelector);
  errorPopupActiveObserver$ = this.store.select(errorPopupActiveSelector);
  successPopupActiveObserver$ = this.store.select(successPopupActiveSelector);
  searchPopupActiveObserver$ = this.store.select(searchPopupActiveSelector);
  homepageCategoryPopupActiveObserver$ = this.store.select(
    homepageCategoryPopupActiveSelector
  );

  loggedIn: any;
  errorPopupActive: any;
  successPopupActive = false;
  searchPoupActive = false;
  homepageCategoryPopupActive = false;

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
    this.loggedInObserver$.subscribe((value) => {
      this.loggedIn = value;
    });
    this.errorPopupActiveObserver$.subscribe((value) => {
      this.errorPopupActive = value;
    });
    this.successPopupActiveObserver$.subscribe((value) => {
      this.successPopupActive = value;
    });
    this.searchPopupActiveObserver$.subscribe((value) => {
      this.searchPoupActive = value;
    });
    this.homepageCategoryPopupActiveObserver$.subscribe((value) => {
      this.homepageCategoryPopupActive = value;
    });
  }
}
