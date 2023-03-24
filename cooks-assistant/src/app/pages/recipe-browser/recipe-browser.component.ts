import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loggedInSelector } from 'libs/store/auth/auth-selectors';
import { RecipeDataApiCalls } from '../../utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { GetRecipeDataSuccessfulResponseInterface } from '../../../app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { RecipeTemplateSavedDataInterface } from '../../../app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';

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

  userClickedMenuTagsHandler(userClickedTags: string[]) {
    const lowerCaseSelectedTags = userClickedTags.map((tag: string) => {
      return tag.toLowerCase();
    });

    if (lowerCaseSelectedTags.length === 0) {
      this.recipeDataApiCalls
        .getAllRecipeData()
        .then((data: GetRecipeDataSuccessfulResponseInterface) => {
          this.retrievedRecipeCards = data.retrievedData;
          console.log(data.retrievedData);
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

          return data;
        })
        .catch((err: Error) => {
          this.activatePopupService.errorPopupHandler(err.message);
        });
    }
  }

  loggedInObserver$ = this.store.select(loggedInSelector);
  loggedIn = false;

  errorPopupActiveObserver$ = this.store.select(errorPopupActiveSelector);
  errorPopupActive = false;

  successPopupActiveObserver$ = this.store.select(successPopupActiveSelector);
  successPopupActive = false;

  recipeNavMenuActive = false;

  retrievedRecipeCards: RecipeTemplateSavedDataInterface[] = [];

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
        return data;
      })

      .catch((err: Error) => {
        this.activatePopupService.errorPopupHandler(err.message);
      });
  }

  recipeNavMenuClickHandler() {
    this.recipeNavMenuActive = !this.recipeNavMenuActive;
  }
}
