import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipeTemplateSavedDataInterface } from '../../../../app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { Input } from '@angular/core';
import { dishImagesData } from '../../../constants/constants';

@Component({
  selector: 'recipe-browser-recipe-card',
  templateUrl: './recipe-browser-recipe-card.component.html',
  styleUrls: ['./recipe-browser-recipe-card.component.css'],
  providers: [],
})
export class RecipeBrowerRecipeCardComponent {
  @Input('dataEntry') dataEntry: RecipeTemplateSavedDataInterface = {
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
  };
  constructor(private store: Store) {}
  dishImagesData = dishImagesData;

  dishImageLocation = `../../../../../${
    dishImagesData[this.dataEntry.selectedRecipeDishImageIndex].imageLocation
  }`;

  ngOnInit() {
    const topCardElements = document.getElementsByClassName(
      'recipe-browser-recipe-card'
    );
    for (
      let indexOfTopCardElements = 0;
      indexOfTopCardElements < topCardElements.length;
      indexOfTopCardElements++
    ) {
      const parentELement = topCardElements[indexOfTopCardElements]
        .parentElement as HTMLElement;
      parentELement.style.width = 'max(100%,100%)';
      parentELement.style.height = 'max(100%,100%)';
    }
    console.log();
  }
}
