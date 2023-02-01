import { Component, Input } from '@angular/core';
import { RecipeTagFilter } from 'src/app/utilities/recipe-tag-filter/recipe-tag-filter.service';
@Component({
  selector: 'slide-display',
  templateUrl: './slide-display.component.html',
  styleUrls: ['./slide-display.component.css'],
  providers: [RecipeTagFilter],
})
export class SlideDisplay {
  constructor(private tagFilterService: RecipeTagFilter) {}
  @Input('configuration') configuration = 0;
  @Input('slideTitle') slideTitle = '';
  configurationZero = false;
  configurationOne = false;
  configurationTwo = false;

  tempData = [
    {
      title: 'Roasted Chicken breast with cherry',
      cookingTimeInMinutes: '20',
      tags: ['Gluten', 'Spicy', 'Veggies', 'Dinner'],
      imageUrl: 'assets/images/food/basamic-chicken.jpg',
    },
    {
      title: 'French Toast',
      cookingTimeInMinutes: '30',
      tags: ['Gluten', 'Breakfast', 'Sweet'],
      imageUrl: 'assets/images/food/french-toast.jpg',
    },
    {
      title: 'Meat Platter',
      cookingTimeInMinutes: '60',
      tags: ['Meat', 'Dinner'],
      imageUrl: 'assets/images/food/meat-plater.jpg',
    },
    {
      title: 'Veggie Salad',
      cookingTimeInMinutes: '100',
      tags: ['Vegetrainian', 'Veggies'],
      imageUrl: 'assets/images/food/veggie-salad.jpg',
    },
  ];

  renderReadyIcon = [];
  dataTagArray: string[][] = [];

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

    // Configuration Check

    if (this.configuration === 0) {
      this.configurationZero = true;
    } else if (this.configuration === 1) {
      this.configurationOne = true;
    } else {
      this.configurationTwo = true;
    }
  }
}
