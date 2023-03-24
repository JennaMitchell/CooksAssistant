import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { RecipeCreatorFunctions } from '../../../../utilities/recipe-creator-functions/recipe-creator-function.service';

import { dishImagesData } from '../../../../constants/constants';
import { ActivatePopupService } from '../../../../utilities/activate-popup-functions/activate-popup-functions.service';
import { RecipeTemplateSavedDataInterface } from 'src/app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
// interface TextAreaContainersIdsObjectInterface {
//   [key: string]: string;
// }
@Component({
  selector: 'recipe-template-one-viewer',
  templateUrl: './recipe-template-1-viewer.component.html',
  styleUrls: [
    '../../../recipe-creator/templates/template-1/recipe-template-1.component.css',
  ],
  providers: [RecipeCreatorFunctions, ActivatePopupService],
})
export class RecipeTemplateOneViewer {
  @Input('recipeData') recipeData: RecipeTemplateSavedDataInterface = {
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
    rating: 0,
    numberOfMakes: 0,
  };

  constructor(
    private store: Store,
    private recipeCreatorFunctions: RecipeCreatorFunctions,
    private activatePopupService: ActivatePopupService
  ) {}
  dishImagesData = dishImagesData;
}
