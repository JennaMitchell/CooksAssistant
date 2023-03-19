import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { RecipeCreatorActions } from 'libs/store/recipe-creator/recipe-creator-actions.actions';
import {
  userHasEnteredDataSelector,
  selectedRecipeTemplateUserData,
  selectedTagsSelector,
  userSelectedRecipeDishImageIndexSelector,
} from 'libs/store/recipe-creator/recipe-creator-selectors';
import { changeRecipeTemplatePopupActiveSelector } from '../../../../../../libs/store/popups/popup-selectors';
import {
  RecipeCreatorFunctions,
  ReturnedCreatorRecipeDataAndIdsInterface,
} from '../../../../utilities/recipe-creator-functions/recipe-creator-function.service';
import { PopupActions } from 'libs/store/popups/popup-actions.actions';
import { dishImagesData } from '../../../../constants/constants';
import { ActivatePopupService } from '../../../../utilities/activate-popup-functions/activate-popup-functions.service';
interface TextAreaContainersIdsObjectInterface {
  [key: string]: string;
}
@Component({
  selector: 'recipe-template-two',
  templateUrl: './recipe-template-2.component.html',
  styleUrls: ['./recipe-template-2.component.css'],
  providers: [RecipeCreatorFunctions, ActivatePopupService],
})
export class RecipeTemplateTwo {
  constructor(
    private store: Store,
    private recipeCreatorFunctions: RecipeCreatorFunctions,
    private activatePopupService: ActivatePopupService
  ) {}
  dishImagesData = dishImagesData;

  editPhotoButtonMouseEnter = false;

  selectedTagsObserver$ = this.store.select(selectedTagsSelector);
  selectedTags: string[] = [];
  selectedTagsButtonIds: string[] = [];

  activeTextAreaId = '';
  changeRecipeTemplatePopupActiveSelectorObserver$ = this.store.select(
    changeRecipeTemplatePopupActiveSelector
  );
  selectedRecipeTemplateUserDataObserver$ = this.store.select(
    selectedRecipeTemplateUserData
  );

  userEnteredData = false;
  userHasEnteredDataSelectorObserver$ = this.store.select(
    userHasEnteredDataSelector
  );
  selectedRecipeTemplateUserDataFromStore = {
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
  };
  userEnteredDataFromStore = false;
  userSelectedRecipeDishImageIndexObserver$ = this.store.select(
    userSelectedRecipeDishImageIndexSelector
  );

  textAreaContainersIdsObject: TextAreaContainersIdsObjectInterface = {
    ingredients: 'recipe-template-two-ingredients-textarea-',
    directions: 'recipe-template-two-directions-textarea-',
    notes: 'recipe-template-two-notes-textarea-',
  };
  ingredientListIds = ['recipe-template-two-ingredients-textarea-0'];
  directionsListIds = ['recipe-template-two-directions-textarea-0'];
  notesListIds = ['recipe-template-two-notes-textarea-0'];

  acceptedListIdTypes = ['ingredients', 'directions', 'notes'];

  templateData = {
    title: 'Savory French Toast',
    quote: 'A gluten-free version of French Toast',
    servings: '3',
    prepTime: '3 MIN',
    cookingTime: '3 MIN',
    ingredientsList: ['300ml'],
    directionsList: ['1. This line of text needs to break onto the next line'],
    notes: ['- Add notes to your recipe to add any addition details'],
    description: '',
    selectedRecipeDishImageIndex: 2,
  };

  editTagsButtonMouseEnter = false;
  editPhotoButtonMouseEnterHandler() {
    this.editPhotoButtonMouseEnter = !this.editPhotoButtonMouseEnter;
  }

  dishImageEditButtonHandler() {
    this.activatePopupService.activateRecipeCreatorDishImagePopup();
  }
  deleteTagButtonHandler(event: MouseEvent) {
    let targetElement = event.target as HTMLElement;
    let targetId = targetElement.id;

    if (targetId.length === 0) {
      targetElement = targetElement.parentElement as HTMLButtonElement;
      targetId = targetElement.id;
    }

    const splitId = targetId.split('-');

    const selectedTag = splitId[splitId.length - 2];

    const indexOfSelectedTag = this.selectedTags.indexOf(selectedTag);
    this.selectedTags.splice(indexOfSelectedTag, 1);

    this.store.dispatch(
      RecipeCreatorActions.updateSelectedtags({
        selectedTags: this.selectedTags,
      })
    );
  }

  editTagButtonMouseEnterHandler() {
    this.editTagsButtonMouseEnter = !this.editTagsButtonMouseEnter;
  }

  editTagsButtonHandler() {
    this.store.dispatch(PopupActions.updateLockwebpageviewport({ lock: true }));
    this.store.dispatch(
      PopupActions.updateRecipetagspopupactive({ recipeTagsPopupActive: true })
    );
  }

  textAreaInputHandler(event: Event, textAreaType: string) {
    const targetElement = event.target as HTMLTextAreaElement;
    this.recipeCreatorFunctions.textAreaInputHandler(targetElement);
    this.templateData = this.recipeCreatorFunctions.updateLocalRecipeData(
      this.templateData,
      textAreaType,
      event
    );
    this.userEnteredData = true;
  }

  deleteTextAreaHandler(event: MouseEvent) {
    let retrievedData: ReturnedCreatorRecipeDataAndIdsInterface;
    retrievedData = this.recipeCreatorFunctions.deleteEntryButtonHandler(
      event,
      this.acceptedListIdTypes,
      this.templateData,
      this.textAreaContainersIdsObject
    );
    this.templateData = retrievedData.templateData;
    this.ingredientListIds = retrievedData.idsArray;
  }

  addTextAreaHandler(type: string) {
    let retrievedData: ReturnedCreatorRecipeDataAndIdsInterface;

    switch (type) {
      case 'ingredients':
        retrievedData = this.recipeCreatorFunctions.addTextFieldButtonHandler(
          this.templateData,
          this.ingredientListIds,
          type
        );
        this.templateData = retrievedData.templateData;
        this.ingredientListIds = retrievedData.idsArray;

        break;
      case 'directions':
        retrievedData = this.recipeCreatorFunctions.addTextFieldButtonHandler(
          this.templateData,
          this.directionsListIds,
          type
        );
        this.templateData = retrievedData.templateData;
        this.directionsListIds = retrievedData.idsArray;

        break;
      case 'notes':
        retrievedData = this.recipeCreatorFunctions.addTextFieldButtonHandler(
          this.templateData,
          this.notesListIds,
          type
        );
        this.templateData = retrievedData.templateData;
        this.notesListIds = retrievedData.idsArray;

        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.changeRecipeTemplatePopupActiveSelectorObserver$.subscribe((value) => {
      if (value) {
        this.store.dispatch(
          RecipeCreatorActions.updateRecipetemplateuserdata({
            recipeTemplateUserData: this.templateData,
          })
        );
      }
    });
    this.selectedRecipeTemplateUserDataObserver$.subscribe((value) => {
      this.selectedRecipeTemplateUserDataFromStore = value;
    });

    this.userHasEnteredDataSelectorObserver$.subscribe((value) => {
      this.userEnteredDataFromStore = value;
      if (value) {
        this.templateData = this.selectedRecipeTemplateUserDataFromStore;
      }
    });

    this.selectedTagsObserver$.subscribe((value: string[]) => {
      this.selectedTags = value.map((tag: string) => {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
      });
      this.selectedTagsButtonIds = value.map((tag: string) => {
        return 'recipe-template-1-' + tag + '-button';
      });
    });
    this.userSelectedRecipeDishImageIndexObserver$.subscribe(
      (value: number) => {
        if (value !== -1) {
          this.templateData.selectedRecipeDishImageIndex = value;
        }
      }
    );
  }

  ngAfterViewInit() {
    this.recipeCreatorFunctions.textAreaResizeAllFunction();
  }
}
