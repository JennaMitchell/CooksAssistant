import { Component } from '@angular/core';
import { RecipeTagFilter } from 'src/app/utilities/recipe-tag-filter/recipe-tag-filter.service';

interface DataEntryInterface {
  title: string;
  cookingTimeInMinutes: string;
  tags: string[];
  imageUrl: string;
  rating: number;
  numberOfMakes: string;
  numberOfReviews: number;
  countryMadeIn: string;
}
@Component({
  selector: 'homepage-cuisines-section',
  templateUrl: './homepage-cuisines-section.component.html',
  styleUrls: ['./homepage-cuisines-section.component.css'],
  providers: [RecipeTagFilter],
})
export class HomepageCuisinesSection {
  constructor(private tagFilterService: RecipeTagFilter) {}
  renderReadyIcon = [];
  dataTagArray: string[][] = [];

  tempData: DataEntryInterface[] = [
    {
      title: 'Roasted Chicken breast with cherry',
      cookingTimeInMinutes: '20',
      tags: ['Gluten', 'Spicy', 'Veggies', 'Dinner'],
      imageUrl: 'assets/images/food/basamic-chicken.jpg',
      rating: 5,
      numberOfMakes: '1000000',
      numberOfReviews: 100,
      countryMadeIn: 'France',
    },
    {
      title: 'Chicken Salad',
      cookingTimeInMinutes: '10',
      tags: ['Chicken', 'Veggies', 'Lunch'],
      imageUrl: 'assets/images/food/chicken-salad.jpg',
      rating: 2.5,
      numberOfMakes: '1000',
      numberOfReviews: 3210,
      countryMadeIn: 'France',
    },
    {
      title: 'French Toast',
      cookingTimeInMinutes: '30',
      tags: ['Gluten', 'Breakfast', 'Sweet'],
      imageUrl: 'assets/images/food/french-toast.jpg',
      rating: 3,
      numberOfMakes: '300000',
      numberOfReviews: 200,
      countryMadeIn: 'Russia',
    },
    {
      title: 'Meat Platter',
      cookingTimeInMinutes: '60',
      tags: ['Meat', 'Dinner'],
      imageUrl: 'assets/images/food/meat-platter.jpg',
      rating: 4.2,
      numberOfMakes: '302000',
      numberOfReviews: 1010000,
      countryMadeIn: 'USA',
    },
    {
      title: 'Veggie Salad',
      cookingTimeInMinutes: '100',
      tags: ['Vegetrainian', 'Veggies'],
      imageUrl: 'assets/images/food/veggie-salad.jpg',
      rating: 4.5,
      numberOfMakes: '100',
      numberOfReviews: 23400000,
      countryMadeIn: 'India',
    },
  ];
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
