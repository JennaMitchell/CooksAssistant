import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loggedInSelector } from 'libs/store/auth/auth-selectors';
import { RecipeDataApiCalls } from '../../utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { GetRecipeDataSuccessfulResponseInterface } from '../../../app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { RecipeTemplateSavedDataInterfaceWithId } from '../../../app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';

import { ActivatePopupService } from 'src/app/utilities/activate-popup-functions/activate-popup-functions.service';
import {
  errorPopupActiveSelector,
  successPopupActiveSelector,
} from 'libs/store/popups/popup-selectors';
@Component({
  selector: 'recipe-browser',
  templateUrl: './recipe-browser.component.html',
  styleUrls: ['./recipe-browser.component.css'],
  providers: [RecipeDataApiCalls, ActivatePopupService],
})
export class RecipeBrowerComponent {
  constructor(
    private store: Store,
    private recipeDataApiCalls: RecipeDataApiCalls,
    private activatePopupService: ActivatePopupService
  ) {}

  numberOfItemsPerPage = 9;
  numberOfPages = 0;
  loggedInObserver$ = this.store.select(loggedInSelector);
  loggedIn = false;

  errorPopupActiveObserver$ = this.store.select(errorPopupActiveSelector);
  errorPopupActive = false;

  successPopupActiveObserver$ = this.store.select(successPopupActiveSelector);
  successPopupActive = false;

  recipeNavMenuActive = false;

  retrievedRecipeCards: RecipeTemplateSavedDataInterfaceWithId[] = [];

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

    this.recipeDataApiCalls
      .getAllRecipeData()
      .then((data: GetRecipeDataSuccessfulResponseInterface) => {
        this.retrievedRecipeCards = data.retrievedData;
        this.numberOfPagesCalculator(this.retrievedRecipeCards);
        return data;
      })
      .catch((err: Error) => {
        this.activatePopupService.errorPopupHandler(err.message);
      });
  }

  numberOfPagesCalculator(
    tempRetrievedRecipeCards: RecipeTemplateSavedDataInterfaceWithId[]
  ) {
    const numberOfCardsRetrieved = tempRetrievedRecipeCards.length;

    this.numberOfPages = Math.ceil(
      numberOfCardsRetrieved / this.numberOfItemsPerPage
    );
    console.log(this.numberOfPages);
  }

  userClickedMenuTagsHandler(userClickedTags: string[]) {
    const lowerCaseSelectedTags = userClickedTags.map((tag: string) => {
      return tag.toLowerCase();
    });

    if (lowerCaseSelectedTags.length === 0) {
      this.recipeDataApiCalls
        .getAllRecipeData()
        .then((data: GetRecipeDataSuccessfulResponseInterface) => {
          this.numberOfPagesCalculator(this.retrievedRecipeCards);
          return data;
        })

        .catch((err: Error) => {
          this.activatePopupService.errorPopupHandler(err.message);
        });
    } else {
      this.recipeDataApiCalls
        .getRecipeDataWithFilter(JSON.stringify(lowerCaseSelectedTags))
        .then((data: GetRecipeDataSuccessfulResponseInterface) => {
          this.retrievedRecipeCards = data.retrievedData;
          this.numberOfPagesCalculator(this.retrievedRecipeCards);
          return data;
        })
        .catch((err: Error) => {
          this.activatePopupService.errorPopupHandler(err.message);
        });
    }
  }
  recipeNavMenuClickHandler() {
    this.recipeNavMenuActive = !this.recipeNavMenuActive;
  }
}
