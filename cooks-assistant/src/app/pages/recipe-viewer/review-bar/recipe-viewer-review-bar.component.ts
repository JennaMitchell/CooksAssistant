import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loggedInSelector,
  recipesRatedIdsArraySelector,
} from 'libs/store/auth/auth-selectors';

import { RecipeDataApiCalls } from 'src/app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { ActivatePopupService } from 'src/app/utilities/activate-popup-functions/activate-popup-functions.service';
import { UserRatedRecipeEntryInterface } from 'libs/store/auth/auth-reducers';
import {
  usernameSelector,
  tokenSelector,
} from 'libs/store/auth/auth-selectors';

@Component({
  selector: 'recipe-viewer-review-bar',
  templateUrl: './recipe-viewer-review-bar.component.html',
  styleUrls: ['./recipe-viewer-review-bar.component.css'],
  providers: [],
})
export class RecipeViewerReviewBar {
  constructor(
    private store: Store,
    private recipeDataApiCalls: RecipeDataApiCalls,
    private activatePopupService: ActivatePopupService
  ) {}
  @Input('recipeData') recipeData = {
    title: '',
    quote: '',
    servings: '',
    prepTime: '',
    cookingTime: '',
    ingredientsList: [''],
    directionsList: [''],
    notes: [''],
    description: '',
    selectedRecipeDishImageIndex: 0,
    username: '',
    selectedTemplateIndex: 0,
    tags: [''],
    ratings: [0],
    numberOfMakes: 0,
    _id: '',
  };

  starButtonsIds = [
    'recipe-viewer-star-rating-0',
    'recipe-viewer-star-rating-1',
    'recipe-viewer-star-rating-2',
    'recipe-viewer-star-rating-3',
    'recipe-viewer-star-rating-4',
  ];

  activeStarButtonsArray = [false, false, false, false, false];
  starButtonMouseClickEventOccured = false;
  starButtonIndexClicked = -1;
  makeButtonHoverActive = false;
  makeButtonActive = false;
  makeButtonClickEventOccured = false;
  loggedInObserver$ = this.store.select(loggedInSelector);
  loggedIn = false;
  usernameObserver$ = this.store.select(usernameSelector);
  username = '';
  userTokenObserver$ = this.store.select(tokenSelector);
  userToken = '';

  recipesRatedIdArrayObserver$ = this.store.select(
    recipesRatedIdsArraySelector
  );
  recipesRatedIdArray: UserRatedRecipeEntryInterface[] = [];

  xObserver$ = this.store.select(recipesRatedIdsArraySelector);

  ngOnInit() {
    this.loggedInObserver$.subscribe((value) => {
      this.loggedIn = value;
    });
    this.recipesRatedIdArrayObserver$.subscribe((value) => {
      this.recipesRatedIdArray = value;
    });

    this.usernameObserver$.subscribe((value) => {
      this.username = value;
    });
    this.userTokenObserver$.subscribe((value) => {
      this.userToken = value;
    });
  }

  getTargetElementIdIndex(event: Event) {
    let targetElement = event.target as HTMLElement;
    let targetId = targetElement.id;

    if (targetId.length === 0) {
      targetElement = targetElement.parentElement as HTMLButtonElement;
      targetId = targetElement.id;
    }
    const splitId = targetId.split('-');
    const buttonIdIndex = +splitId[splitId.length - 1];
    return buttonIdIndex;
  }

  starButtonMouseEnterLeaveHandler(event: Event) {
    const buttonIdIndex = this.getTargetElementIdIndex(event);

    if (!this.starButtonMouseClickEventOccured) {
      this.activeStarButtonsArray[buttonIdIndex] =
        !this.activeStarButtonsArray[buttonIdIndex];
    }
  }

  async starButtonClickHandler(event: Event) {
    const buttonIdIndex = this.getTargetElementIdIndex(event);
    const tempActiveButtons = [false, false, false, false, false];
    const tempRecipeRatings = this.recipeData.ratings.slice();

    if (buttonIdIndex === this.starButtonIndexClicked) {
      this.activeStarButtonsArray = tempActiveButtons;
      this.starButtonIndexClicked = -1;
      tempRecipeRatings.splice(tempRecipeRatings.length - 1, 1);
      if (this.makeButtonActive) {
        this.makeButtonClickHandler();
      }
    } else if (this.starButtonIndexClicked !== -1) {
      for (
        let buttonIndex = 0;
        buttonIndex < +buttonIdIndex + 1;
        buttonIndex++
      ) {
        tempActiveButtons[buttonIndex] = true;
      }
      this.activeStarButtonsArray = tempActiveButtons;
      tempRecipeRatings[tempRecipeRatings.length - 1] = buttonIdIndex + 1;

      this.starButtonIndexClicked = buttonIdIndex;
      if (!this.makeButtonActive) {
        this.makeButtonClickHandler();
      }
    } else {
      for (
        let buttonIndex = 0;
        buttonIndex < +buttonIdIndex + 1;
        buttonIndex++
      ) {
        tempActiveButtons[buttonIndex] = true;
      }
      this.activeStarButtonsArray = tempActiveButtons;
      tempRecipeRatings.push(buttonIdIndex + 1);

      this.starButtonIndexClicked = buttonIdIndex;
      if (!this.makeButtonActive) {
        this.makeButtonClickHandler();
      }
    }
    this.recipeData.ratings = tempRecipeRatings;

    this.starButtonMouseClickEventOccured = true;
    console.log(this.recipeData.ratings);

    if (this.userToken.length !== 0) {
      try {
        const copyOfRecipesRatedIdArray = this.recipesRatedIdArray.slice();
        copyOfRecipesRatedIdArray.push({
          recipeId: this.recipeData._id,
          rating: this.starButtonIndexClicked + 1,
        });
        await this.recipeDataApiCalls.updateRecipeRatingData(
          this.recipeData._id,
          this.recipeData.ratings
        );

        const response = await this.recipeDataApiCalls.updateUserRatingArray(
          this.username,
          copyOfRecipesRatedIdArray,
          this.userToken
        );

        this.activatePopupService.successPopupHandler(response.message || '');
      } catch (err) {
        let message;
        if (err instanceof Error) message = err.message;
        else message = String(err);
        this.activatePopupService.errorPopupHandler(message);
      }
    }
  }

  makeButtonHoverHandler() {
    if (!this.makeButtonClickEventOccured) {
      this.makeButtonHoverActive = !this.makeButtonHoverActive;
    }
  }

  makeButtonClickHandler() {
    if (this.makeButtonActive) {
      this.makeButtonClickEventOccured = false;
      this.makeButtonActive = false;
      this.makeButtonHoverActive = false;
      this.recipeData.numberOfMakes = this.recipeData.numberOfMakes - 1;
    } else {
      this.makeButtonClickEventOccured = true;
      this.makeButtonHoverActive = true;
      this.makeButtonActive = true;
      this.recipeData.numberOfMakes = this.recipeData.numberOfMakes + 1;
    }

    this.recipeDataApiCalls
      .updateRecipeNumberOfMakes(
        this.recipeData._id,
        this.recipeData.numberOfMakes
      )
      .then((response) => {
        this.activatePopupService.successPopupHandler(response.message || '');
      });
  }
}
