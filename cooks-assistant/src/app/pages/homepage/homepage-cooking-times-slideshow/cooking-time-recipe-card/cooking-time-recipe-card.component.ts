import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'homepage-cooking-time-recipe-card',
  templateUrl: './cooking-time-recipe-card.component.html',
  styleUrls: ['./cooking-time-recipe-card.component.css'],
  providers: [],
})
export class HomepageCookingTimeRecipeCard {
  @Input('recipeTitle') recipeTitle = '';
  @Input('recipeTags') recipeTags: string[] = [];
  @Input('recipeDescription') recipeDescription = '';

  @Input('numberOfMakes') numberOfMakes = '';
  @Input('cookingTime') cookingTime = '';
  @Input('numberOfReviews') numberOfReviews = '';
  @Input('postiveRatingArray') postiveRatingArray: boolean[] = [];
  @Input('halfStarActive') halfStarActive: boolean = false;
  @Input('negativeRatingArray') negativeRatingArray: boolean[] = [];
  @Input('flagLocation') flagLocation = '';
  @Input('nationOrigin') nationOrigin = '';
}
