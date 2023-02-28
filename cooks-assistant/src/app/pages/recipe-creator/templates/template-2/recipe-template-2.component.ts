import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateTemplateTextPopupDataSelector } from 'libs/store/popups/popup-selectors';
import { RecipeCreatorActions } from 'libs/store/recipe-creator/recipe-creator-actions.actions';

import {
  RecipeCreatorFunctions,
  ReturnedCreatorRecipeDataAndIdsInterface,
} from '../../../../utilities/recipe-creator-functions/recipe-creator-function.service';
interface TextAreaContainersIdsObjectInterface {
  [key: string]: string;
}
@Component({
  selector: 'recipe-template-two',
  templateUrl: './recipe-template-2.component.html',
  styleUrls: ['./recipe-template-2.component.css'],
  providers: [RecipeCreatorFunctions],
})
export class RecipeTemplateTwo {
  constructor(
    private store: Store,
    private recipeCreatorFunctions: RecipeCreatorFunctions
  ) {}
  updateTemplateTextPopupDataObserver$ = this.store.select(
    updateTemplateTextPopupDataSelector
  );
  activeTextAreaId = '';

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
  };

  textAreaInputHandler(event: Event) {
    const targetElement = event.target as HTMLTextAreaElement;
    this.recipeCreatorFunctions.textAreaInputHandler(targetElement);
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
        this.ingredientListIds = retrievedData.idsArray;

        break;
      case 'notes':
        retrievedData = this.recipeCreatorFunctions.addTextFieldButtonHandler(
          this.templateData,
          this.notesListIds,
          type
        );
        this.templateData = retrievedData.templateData;
        this.ingredientListIds = retrievedData.idsArray;

        break;
      default:
        break;
    }
  }

  ngAfterViewInit() {
    this.recipeCreatorFunctions.textAreaResizeAllFunction();
  }
}
