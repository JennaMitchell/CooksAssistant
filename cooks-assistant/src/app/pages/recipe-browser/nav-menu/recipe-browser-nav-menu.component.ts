import { Component, Input, Output, EventEmitter } from '@angular/core';

import {
  preferenceButtonData,
  nationalityButtonData,
  mealsTimesButtonData,
  recipeCourseTagData,
  mainIngredientsData,
} from '../../../constants/constants';

import { RecipeDataApiCalls } from 'src/app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
@Component({
  selector: 'recipe-browser-nav-menu',
  templateUrl: './recipe-browser-nav-menu.component.html',
  styleUrls: ['./recipe-browser-nav-menu.component.css'],
  providers: [RecipeDataApiCalls],
})
export class RecipeBrowerNavBarComponent {
  constructor() {}

  @Input('menuMoveOut') menuMoveOut = false;
  @Output() userSelectedTagsEvent = new EventEmitter<string[]>();

  recipeCourseTagData = recipeCourseTagData;
  recipeCourseTitles: string[] = [];
  mainIngredientsData = mainIngredientsData;
  mainIngredientTitles: string[] = [];

  preferenceButtonData = preferenceButtonData;
  preferenceButtonTitles: string[] = [];
  nationalityButtonData = nationalityButtonData;
  nationalityButtonTitles: string[] = [];
  mealsTimesButtonData = mealsTimesButtonData;
  mealsTimesButtonTitles: string[] = [];

  activeDropDownButton = '';

  selectedSubDropDownsTags: string[] = [];

  titlesArrayCreator(data: any) {
    let tempArray: string[] = [];
    data.map((entry: any) => {
      tempArray.push(entry.title);
    });
    return tempArray;
  }

  ngOnInit() {
    this.preferenceButtonTitles = this.titlesArrayCreator(preferenceButtonData);

    this.nationalityButtonTitles = this.titlesArrayCreator(
      nationalityButtonData
    );

    this.mealsTimesButtonTitles = this.titlesArrayCreator(mealsTimesButtonData);

    this.recipeCourseTitles = this.titlesArrayCreator(recipeCourseTagData);
    this.mainIngredientTitles = this.titlesArrayCreator(mainIngredientsData);
  }

  dropDownClickHandler(event: MouseEvent) {
    let targetElement = event.target as HTMLButtonElement;
    let targetId = targetElement.id;
    if (targetId.length === 0) {
      targetElement = targetElement.parentElement as HTMLButtonElement;
      targetId = targetElement.id;
    }

    const splitId = targetId.split('-');
    const selectedId = splitId[splitId.length - 1];

    if (selectedId === this.activeDropDownButton) {
      this.activeDropDownButton = '';
    } else {
      this.activeDropDownButton = selectedId;
    }
  }

  subCategoryButtonClickHandler(
    selectedTitle: string,
    topCategoryTitle: string
  ) {
    let tagRemoved = false;
    switch (topCategoryTitle) {
      case 'preferences':
        if (this.preferenceButtonTitles.includes(selectedTitle)) {
          for (
            let indexOfPrefrenceTitles = 0;
            indexOfPrefrenceTitles < this.preferenceButtonTitles.length;
            indexOfPrefrenceTitles++
          ) {
            if (
              this.selectedSubDropDownsTags.includes(
                this.preferenceButtonTitles[indexOfPrefrenceTitles]
              )
            ) {
              const indexOfFoundEntry = this.selectedSubDropDownsTags.indexOf(
                this.preferenceButtonTitles[indexOfPrefrenceTitles]
              );

              this.selectedSubDropDownsTags.splice(indexOfFoundEntry, 1);
              tagRemoved = true;
            }
          }
          if (!tagRemoved) {
            this.selectedSubDropDownsTags.push(selectedTitle);
          }
        }

        break;
      case 'nationality':
        if (this.nationalityButtonTitles.includes(selectedTitle)) {
          for (
            let indexOfNationalityTitles = 0;
            indexOfNationalityTitles < this.nationalityButtonTitles.length;
            indexOfNationalityTitles++
          ) {
            if (
              this.selectedSubDropDownsTags.includes(
                this.nationalityButtonTitles[indexOfNationalityTitles]
              )
            ) {
              const indexOfFoundEntry = this.selectedSubDropDownsTags.indexOf(
                this.nationalityButtonTitles[indexOfNationalityTitles]
              );

              this.selectedSubDropDownsTags.splice(indexOfFoundEntry, 1);
              tagRemoved = true;
            }
          }

          if (!tagRemoved) {
            this.selectedSubDropDownsTags.push(selectedTitle);
          }
        }

        break;
      case 'mealTimes':
        if (this.mealsTimesButtonTitles.includes(selectedTitle)) {
          for (
            let indexOfMealsTimesButtonTitles = 0;
            indexOfMealsTimesButtonTitles < this.mealsTimesButtonTitles.length;
            indexOfMealsTimesButtonTitles++
          ) {
            if (
              this.selectedSubDropDownsTags.includes(
                this.mealsTimesButtonTitles[indexOfMealsTimesButtonTitles]
              )
            ) {
              const indexOfFoundEntry = this.selectedSubDropDownsTags.indexOf(
                this.mealsTimesButtonTitles[indexOfMealsTimesButtonTitles]
              );

              this.selectedSubDropDownsTags.splice(indexOfFoundEntry, 1);
              tagRemoved = true;
            }
          }

          if (!tagRemoved) {
            this.selectedSubDropDownsTags.push(selectedTitle);
          }
        }
        break;
      case 'courses':
        if (this.recipeCourseTitles.includes(selectedTitle)) {
          for (
            let indexOfRecipeCourseTitles = 0;
            indexOfRecipeCourseTitles < this.recipeCourseTitles.length;
            indexOfRecipeCourseTitles++
          ) {
            if (
              this.selectedSubDropDownsTags.includes(
                this.recipeCourseTitles[indexOfRecipeCourseTitles]
              )
            ) {
              const indexOfFoundEntry = this.selectedSubDropDownsTags.indexOf(
                this.recipeCourseTitles[indexOfRecipeCourseTitles]
              );

              this.selectedSubDropDownsTags.splice(indexOfFoundEntry, 1);
              tagRemoved = true;
            }
          }

          if (!tagRemoved) {
            this.selectedSubDropDownsTags.push(selectedTitle);
          }
        }
        break;
      case 'mainIngredient':
        if (this.mainIngredientTitles.includes(selectedTitle)) {
          for (
            let indexOfMainIngredientTitles = 0;
            indexOfMainIngredientTitles < this.mainIngredientTitles.length;
            indexOfMainIngredientTitles++
          ) {
            if (
              this.selectedSubDropDownsTags.includes(
                this.mainIngredientTitles[indexOfMainIngredientTitles]
              )
            ) {
              const indexOfFoundEntry = this.selectedSubDropDownsTags.indexOf(
                this.mainIngredientTitles[indexOfMainIngredientTitles]
              );

              this.selectedSubDropDownsTags.splice(indexOfFoundEntry, 1);
              tagRemoved = true;
            }
          }
          if (!tagRemoved) {
            this.selectedSubDropDownsTags.push(selectedTitle);
          }
        }
        break;

      default:
        break;
    }

    this.userSelectedTagsEvent.emit(this.selectedSubDropDownsTags);
  }
}
