import { Component } from '@angular/core';

@Component({
  selector: 'homepage-recipe-categories',
  templateUrl: './homepage-recipe-categories.component.html',
  styleUrls: ['./homepage-recipe-categories.component.css'],
  providers: [],
})
export class HomepageRecipeCategories {
  preferenceButtonData = [
    { title: 'Chicken', logoLocation: 'assets/images/recipe-icons/meat.png' },
    { title: 'Beef', logoLocation: 'assets/images/recipe-icons/meat.png' },
    { title: 'Fish', logoLocation: 'assets/images/recipe-icons/fish.png' },
    { title: 'Vegan', logoLocation: 'assets/images/recipe-icons/leaf.png' },
    {
      title: 'Vegetarian',
      logoLocation: 'assets/images/recipe-icons/leaf.png',
    },
    {
      title: 'Spicy',
      logoLocation: 'assets/images/recipe-icons/red-chili-pepper.png',
    },
  ];
  nationalityButtonData = [
    { title: 'China', logoLocation: 'assets/images/flags/chinese-flag.png' },
    { title: 'France', logoLocation: 'assets/images/flags/france-flag.png' },
    { title: 'India', logoLocation: 'assets/images/flags/india-flag.png' },
    { title: 'Japan', logoLocation: 'assets/images/flags/japan-flag.png' },
    {
      title: 'Mexico',
      logoLocation: 'assets/images/flags/mexico-flag.png',
    },
    {
      title: 'Russia',
      logoLocation: 'assets/images/flags/russia-flag.png',
    },
    {
      title: 'South Korea',
      logoLocation: 'assets/images/flags/south-korea-flag.png',
    },
    {
      title: 'USA',
      logoLocation: 'assets/images/flags/usa-flag.png',
    },
  ];
  mealsTimesButtonData = [
    {
      title: 'Breakfast',
      logoLocation: 'assets/images/meal-times/breakfast.png',
    },
    { title: 'Lunch', logoLocation: 'assets/images/meal-times/lunch.png' },
    { title: 'Dinner', logoLocation: 'assets/images/meal-times/dinner.png' },

    {
      title: 'Dessert',
      logoLocation: 'assets/images/meal-times/dessert.png',
    },
    {
      title: 'Appetizers',
      logoLocation: 'assets/images/meal-times/appetizers.png',
    },
    {
      title: 'Beverages',
      logoLocation: 'assets/images/meal-times/beverages.png',
    },
  ];
}
