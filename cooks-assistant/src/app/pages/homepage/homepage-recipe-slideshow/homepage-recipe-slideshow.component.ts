import { Component } from '@angular/core';
import { RecipeTagFilter } from 'src/app/utilities/recipe-tag-filter/recipe-tag-filter.service';

@Component({
  selector: 'homepage-recipe-slideshow',
  templateUrl: './homepage-recipe-slideshow.component.html',
  styleUrls: ['./homepage-recipe-slideshow.component.css'],
  providers: [RecipeTagFilter],
})
export class HomepageRecipeSlideshow {
  tempData = [
    {
      title: 'Roasted Chicken breast with cherry',
      cookingTimeInMinutes: '20',
      tags: ['Gluten', 'Spicy', 'Veggies', 'Dinner'],
      imageUrl: 'assets/images/food/basamic-chicken.jpg',
    },
    {
      title: 'Chicken Salad',
      cookingTimeInMinutes: '10',
      tags: ['Chicken', 'Veggies', 'Lunch'],
      imageUrl: 'assets/images/food/chicken-salad.jpg',
    },
    {
      title: 'French Toast',
      cookingTimeInMinutes: '30',
      tags: ['Gluten', 'Breakfast', 'Sweet'],
      imageUrl: 'assets/images/food/french-toast.jpg',
    },
    {
      title: 'Meat Platter',
      cooklingTimeInMinutes: '60',
      tags: ['Meat', 'Dinner'],
      imageUrl: 'assets/images/food/meat-platter.jpg',
    },
    {
      title: 'Veggie Salad',
      cookingTimeInMinutes: '100',
      tags: ['Vegetrainian', 'Veggies'],
      imageUrl: 'assets/images/food/veggie-salad.jpg',
    },
  ];

  constructor(private tagFilterService: RecipeTagFilter) {}

  dataTagArray: string[][] = [];
  activeConfigurationNumber = 0;
  activeSlideNumber = 0;
  allFalseSlides = [false, false, false, false, false, false];
  dishCategories = ['Chicken', 'Beef', 'Fish', 'Vegan', 'Vegetarian', 'Sweet'];
  activeSlides = [true, false, false, false, false, false];

  onLeftArrowClick() {
    const copyOfActiveSlide = this.allFalseSlides.slice(0);
    if (this.activeConfigurationNumber >= 2) {
      this.activeConfigurationNumber = 0;
    } else {
      this.activeConfigurationNumber = this.activeConfigurationNumber + 1;
    }
    copyOfActiveSlide[this.activeConfigurationNumber] = true;
    this.activeSlides = copyOfActiveSlide;
  }
  onRightArrowClick() {
    const copyOfActiveSlide = this.allFalseSlides.slice(0);
    if (this.activeConfigurationNumber <= 0) {
      this.activeConfigurationNumber = 2;
    } else {
      this.activeConfigurationNumber = this.activeConfigurationNumber - 1;
    }
    copyOfActiveSlide[this.activeConfigurationNumber] = true;

    this.activeSlides = copyOfActiveSlide;
  }

  ngOnInit() {
    let tempIconArray = [];
    for (
      let tempDataIndex = 0;
      tempDataIndex < this.tempData.length;
      tempDataIndex++
    ) {
      tempIconArray.push(
        this.tagFilterService.recipeTagFilter(this.tempData[tempDataIndex].tags)
      );
    }

    this.dataTagArray = tempIconArray;
  }
}
