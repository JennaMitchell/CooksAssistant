import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PopupActions } from 'libs/store/popups/popup-actions.actions';
import { RecipeCreatorActions } from 'libs/store/recipe-creator/recipe-creator-actions.actions';
import {
  preferenceButtonData,
  nationalityButtonData,
  mealsTimesButtonData,
  recipeCourseTagData,
  mainIngredientsData,
} from '../../../constants/constants';

@Component({
  selector: 'tags-selector-popup',
  templateUrl: './tags-selector-popup.component.html',
  styleUrls: ['./tags-selector-popup.component.css'],
  providers: [],
})
export class TagsSelectorPopupComponent {
  constructor(private store: Store) {}
  preferenceButtonData = preferenceButtonData;
  nationalityButtonData = nationalityButtonData;
  mealsTimesButtonData = mealsTimesButtonData;
  recipeCourseTagData = recipeCourseTagData;
  mainIngredientsData = mainIngredientsData;
  acceptableTags: string[] = [];
  selectedTags: string[] = [];

  preferenceButtonTags: string[] = [];
  nationalityButtonTags: string[] = [];
  mealsTimesTags: string[] = [];
  recipeCourseTags: string[] = [];
  mainIngredientsDataTags: string[] = [];
  activePreferenceButtons: boolean[] = [];
  activeMainIngrientButtons: boolean[] = [];
  activeRecipeCourseButtons: boolean[] = [];

  allFalseActiveNationalityButtonsData: boolean[] = [];
  allFalseActiveMealTimeButtonsData: boolean[] = [];

  activeNationalityButtons: boolean[] = [];
  activeMealTimesButtons: boolean[] = [];

  submitButtonActive: boolean = false;

  ngOnInit() {
    const tempAllFalseNationailtyArray: boolean[] = [];
    const tempAllFalseMealTimeArray: boolean[] = [];
    this.preferenceButtonTags = preferenceButtonData.map((data) => {
      return data.title.toLowerCase();
    });
    this.nationalityButtonTags = nationalityButtonData.map((data, index) => {
      tempAllFalseNationailtyArray[index] = false;
      return data.title.toLowerCase();
    });

    this.mealsTimesTags = mealsTimesButtonData.map((data, index) => {
      tempAllFalseMealTimeArray[index] = false;
      return data.title.toLowerCase();
    });

    this.recipeCourseTags = recipeCourseTagData.map((data) => {
      return data.title.toLowerCase();
    });
    this.mainIngredientsDataTags = mainIngredientsData.map((data) => {
      return data.title.toLowerCase();
    });
    this.acceptableTags = this.mealsTimesTags.concat(
      this.preferenceButtonTags,
      this.nationalityButtonTags,
      this.recipeCourseTags,
      this.mainIngredientsDataTags
    );
  }

  submitButtonCheck() {
    if (this.selectedTags.length === 0) {
      this.submitButtonActive = false;
    } else {
      this.submitButtonActive = true;
    }
  }

  activeButtonChecker() {
    const tempActiveNationalityButtons =
      this.allFalseActiveNationalityButtonsData.slice();
    const tempActiveMealTimeTags =
      this.allFalseActiveMealTimeButtonsData.slice();
    for (
      let indexOfSelectedTags = 0;
      indexOfSelectedTags < this.selectedTags.length;
      indexOfSelectedTags++
    ) {
      const selectedTag = this.selectedTags[indexOfSelectedTags];

      if (this.preferenceButtonTags.includes(selectedTag)) {
        const newActiveButtonArray = this.preferenceButtonTags.map(
          (value: string) => {
            if (value === selectedTag) {
              return true;
            } else {
              return false;
            }
          }
        );

        this.activePreferenceButtons = newActiveButtonArray;
      }

      if (this.mainIngredientsDataTags.includes(selectedTag)) {
        const newActiveButtonArray = this.mainIngredientsDataTags.map(
          (value: string) => {
            if (value === selectedTag) {
              return true;
            } else {
              return false;
            }
          }
        );

        this.activeMainIngrientButtons = newActiveButtonArray;
      }

      if (this.recipeCourseTags.includes(selectedTag)) {
        const newActiveButtonArray = this.recipeCourseTags.map(
          (value: string) => {
            if (value === selectedTag) {
              return true;
            } else {
              return false;
            }
          }
        );

        this.activeRecipeCourseButtons = newActiveButtonArray;
      }

      if (this.nationalityButtonTags.includes(selectedTag)) {
        const indexOfSelectedTag =
          this.nationalityButtonTags.indexOf(selectedTag);
        tempActiveNationalityButtons[indexOfSelectedTag] = true;
      }

      if (this.mealsTimesTags.includes(selectedTag)) {
        const indexOfSelectedTag = this.mealsTimesTags.indexOf(selectedTag);
        tempActiveMealTimeTags[indexOfSelectedTag] = true;
      }
    }
    this.activeMealTimesButtons = tempActiveMealTimeTags;
    this.activeNationalityButtons = tempActiveNationalityButtons;
    this.submitButtonCheck();
  }

  closingButtonHandler() {
    this.store.dispatch(
      PopupActions.updateRecipetagspopupactive({ recipeTagsPopupActive: false })
    );
    this.store.dispatch(
      PopupActions.updateLockwebpageviewport({ lock: false })
    );
  }

  singleActiveButtonHandler(event: MouseEvent) {
    let targetElement = event.target as HTMLElement;
    let targetId = targetElement.id;

    if (targetId.length === 0) {
      targetElement = targetElement.parentElement as HTMLButtonElement;
      targetId = targetElement.id;
    }

    const splitId = targetId.split('-');
    let selectedTag = '';

    for (
      let indexOfSplitId = 0;
      indexOfSplitId < splitId.length;
      indexOfSplitId++
    ) {
      if (this.acceptableTags.includes(splitId[indexOfSplitId])) {
        selectedTag = splitId[indexOfSplitId];
      }
    }

    if (selectedTag.length !== 0) {
      let selectedTagFound = false;
      for (
        let indexOfPreferenceButtonTags = 0;
        indexOfPreferenceButtonTags < this.preferenceButtonTags.length;
        indexOfPreferenceButtonTags++
      ) {
        if (
          this.selectedTags.includes(
            this.preferenceButtonTags[indexOfPreferenceButtonTags]
          )
        ) {
          const indexOfFoundTag = this.selectedTags.indexOf(
            this.preferenceButtonTags[indexOfPreferenceButtonTags]
          );
          this.selectedTags.splice(indexOfFoundTag, 1);
          selectedTagFound = true;
        }
      }

      if (!selectedTagFound) {
        for (
          let indexOfRecipeCourseTags = 0;
          indexOfRecipeCourseTags < this.recipeCourseTags.length;
          indexOfRecipeCourseTags++
        ) {
          if (
            this.selectedTags.includes(
              this.recipeCourseTags[indexOfRecipeCourseTags]
            )
          ) {
            const indexOfFoundTag = this.selectedTags.indexOf(
              this.recipeCourseTags[indexOfRecipeCourseTags]
            );
            this.selectedTags.splice(indexOfFoundTag, 1);
            selectedTagFound = true;
          }
        }
      }
      if (!selectedTagFound) {
        for (
          let indexOfMainIngredientsDataTags = 0;
          indexOfMainIngredientsDataTags < this.mainIngredientsDataTags.length;
          indexOfMainIngredientsDataTags++
        ) {
          if (
            this.selectedTags.includes(
              this.mainIngredientsDataTags[indexOfMainIngredientsDataTags]
            )
          ) {
            const indexOfFoundTag = this.selectedTags.indexOf(
              this.mainIngredientsDataTags[indexOfMainIngredientsDataTags]
            );
            this.selectedTags.splice(indexOfFoundTag, 1);
            selectedTagFound = true;
          }
        }
      }
      this.selectedTags.push(selectedTag);
    }

    this.activeButtonChecker();
  }

  nationalityAndMealTimeButtonHandler(event: MouseEvent) {
    let targetElement = event.target as HTMLElement;
    let targetId = targetElement.id;

    if (targetId.length === 0) {
      targetElement = targetElement.parentElement as HTMLButtonElement;
      targetId = targetElement.id;
    }
    const splitId = targetId.split('-');
    let selectedTag = '';

    for (
      let indexOfSplitId = 0;
      indexOfSplitId < splitId.length;
      indexOfSplitId++
    ) {
      if (this.acceptableTags.includes(splitId[indexOfSplitId])) {
        selectedTag = splitId[indexOfSplitId];
      }
    }

    if (this.selectedTags.includes(selectedTag)) {
      const indexOfFoundEntry = this.selectedTags.indexOf(selectedTag);

      this.selectedTags.splice(indexOfFoundEntry, 1);
      this.activeButtonChecker();
      return;
    } else {
      this.selectedTags.push(selectedTag);
      this.activeButtonChecker();
    }
  }

  submitButtonHandler() {
    this.store.dispatch(
      RecipeCreatorActions.updateSelectedtags({
        selectedTags: this.selectedTags,
      })
    );

    this.closingButtonHandler();
  }
}
