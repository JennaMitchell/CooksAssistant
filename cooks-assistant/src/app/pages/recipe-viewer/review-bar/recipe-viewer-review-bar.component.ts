import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

// interface TextAreaContainersIdsObjectInterface {
//   [key: string]: string;
// }
@Component({
  selector: 'recipe-viewer-review-bar',
  templateUrl: './recipe-viewer-review-bar.component.html',
  styleUrls: ['./recipe-viewer-review-bar.component.css'],
  providers: [],
})
export class RecipeViewerReviewBar {
  constructor(private store: Store) {}

  starButtonsIds = [
    'recipe-viewer-star-rating-0',
    'recipe-viewer-star-rating-1',
    'recipe-viewer-star-rating-2',
    'recipe-viewer-star-rating-3',
    'recipe-viewer-star-rating-4',
  ];

  activeStarButtonsArray = [false, false, false, false, false];
  starButtonMouseClickEventOccured = false;
  makeButtonActive = false;
  makeButtonClickEventOccured = false;

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
    } else {
      if (this.starButtonMouseClickEventOccured) {
        this.starButtonMouseClickEventOccured = false;
      }
    }
  }

  starButtonClickHandler(event: Event) {
    const buttonIdIndex = this.getTargetElementIdIndex(event);
    const tempActiveButtons = [false, false, false, false, false];

    for (let buttonIndex = 0; buttonIndex < +buttonIdIndex + 1; buttonIndex++) {
      tempActiveButtons[buttonIndex] = true;
    }
    this.activeStarButtonsArray = tempActiveButtons;
    this.starButtonMouseClickEventOccured = true;
  }

  makeButtonHoverHandler() {
    if (!this.makeButtonClickEventOccured) {
      this.makeButtonActive = !this.makeButtonActive;
    } else {
      if (this.makeButtonClickEventOccured) {
        this.makeButtonClickEventOccured = false;
      }
    }
  }

  makeButtonClickHandler() {
    this.makeButtonActive = true;
    this.makeButtonClickEventOccured = true;
  }
}
