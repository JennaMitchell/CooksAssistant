import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { recipeCreatorBackgroundPopupActiveSelector } from 'libs/store/popups/popup-selectors';
import { PopupActions } from 'libs/store/popups/popup.actions';
import { selectedRecipeCreatorBackground } from 'libs/store/recipe-creator/recipe-creator-selectors';
import { backgroundImageData } from 'src/app/constants/constants';
import { updateTemplateTextPopupActiveSelector } from 'libs/store/popups/popup-selectors';
@Component({
  selector: 'recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.css'],
  providers: [],
})
export class RecipeCreatorComponent {
  constructor(private store: Store) {}
  backgroundChangerActiveObserver$ = this.store.select(
    recipeCreatorBackgroundPopupActiveSelector
  );
  backgroundChangerActiveValue = false;

  selectedBackgroundIndexObserver$ = this.store.select(
    selectedRecipeCreatorBackground
  );

  updateTemplateTextPopupActiveSelectorObserver$ = this.store.select(
    updateTemplateTextPopupActiveSelector
  );
  updateTemplateTextPopupActiveValue = false;

  recipeCreatorBackgroundPopupActiveSelectorObserver$ = this.store.select(
    recipeCreatorBackgroundPopupActiveSelector
  );
  recipeCreatorBackgroundPopupActiveValue = false;

  selectedBackgroundAltText = '';
  selectedBackgroundImageUrl = '';

  backgroundButtonHover = false;
  recipeCardHover = false;

  backgroundButtonHoverHandler() {
    this.backgroundButtonHover = !this.backgroundButtonHover;
  }
  backgroundButtonHandler() {
    this.store.dispatch(
      PopupActions.updateRecipecreatorbackgroundpopupactive({
        recipeCreatorBackgroundPopupActive: true,
      })
    );
    this.store.dispatch(PopupActions.updateLockwebpageviewport({ lock: true }));
  }

  recipeCardButtonHoverHandler() {
    this.recipeCardHover = !this.recipeCardHover;
  }

  ngOnInit() {
    this.backgroundChangerActiveObserver$.subscribe((value) => {
      this.backgroundChangerActiveValue = value;
    });
    this.selectedBackgroundIndexObserver$.subscribe((value) => {
      this.selectedBackgroundAltText = backgroundImageData[+value].altText;
      this.selectedBackgroundImageUrl = backgroundImageData[+value].imageUrl;
    });

    this.recipeCreatorBackgroundPopupActiveSelectorObserver$.subscribe(
      (value) => {
        this.recipeCreatorBackgroundPopupActiveValue = value;
      }
    );
    this.updateTemplateTextPopupActiveSelectorObserver$.subscribe((value) => {
      this.updateTemplateTextPopupActiveValue = value;
    });
  }
}
