import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomepageStateInterface } from 'libs/store/homepage/homepage-reducers';
import { HomepageActions } from 'libs/store/homepage/homepage.actions';
@Component({
  selector: 'homepage-recipe-categories',
  templateUrl: './homepage-recipe-categories.component.html',
  styleUrls: ['./homepage-recipe-categories.component.css'],
  providers: [],
})
export class HomepageRecipeCategories {
  constructor(private store: Store<HomepageStateInterface>) {}

  prefrenceButtonTitles: string[] = [];
  nationalityButtonTitles: string[] = [];
  mealsTimesButtonTitles: string[] = [];

  preferenceButtonData = [
    {
      title: 'Chicken',
      logoLocation: 'assets/images/recipe-icons/meat.png',
      id: 'homepage-chicken-button',
    },
    {
      title: 'Beef',
      logoLocation: 'assets/images/recipe-icons/meat.png',
      id: 'homepage-beef-button',
    },
    {
      title: 'Fish',
      logoLocation: 'assets/images/recipe-icons/fish.png',
      id: 'homepage-fish-button',
    },
    {
      title: 'Vegan',
      logoLocation: 'assets/images/recipe-icons/leaf.png',
      id: 'homepage-vegan-button',
    },
    {
      title: 'Vegetarian',
      logoLocation: 'assets/images/recipe-icons/leaf.png',
      id: 'homepage-vegetarian-button',
    },
    {
      title: 'Spicy',
      logoLocation: 'assets/images/recipe-icons/red-chili-pepper.png',
      id: 'homepage-spicy-button',
    },
  ];

  nationalityButtonData = [
    {
      title: 'Chinense',
      logoLocation: 'assets/images/flags/chinese-flag.png',
      id: 'homepage-china-button',
    },
    {
      title: 'French',
      logoLocation: 'assets/images/flags/france-flag.png',
      id: 'homepage-france-button',
    },
    {
      title: 'Indian',
      logoLocation: 'assets/images/flags/india-flag.png',
      id: 'homepage-india-button',
    },
    {
      title: 'Japanense',
      logoLocation: 'assets/images/flags/japan-flag.png',
      id: 'homepage-japan-button',
    },
    {
      title: 'Mexican',
      logoLocation: 'assets/images/flags/mexico-flag.png',
      id: 'homepage-mexico-button',
    },
    {
      title: 'Russian',
      logoLocation: 'assets/images/flags/russia-flag.png',
      id: 'homepage-russia-button',
    },
    {
      title: 'Korean',
      logoLocation: 'assets/images/flags/south-korea-flag.png',
      id: 'homepage-sk-button',
    },
    {
      title: 'USA',
      logoLocation: 'assets/images/flags/usa-flag.png',
      id: 'homepage-usa-button',
    },
  ];
  mealsTimesButtonData = [
    {
      title: 'Breakfast',
      logoLocation: 'assets/images/meal-times/breakfast.png',
      id: 'homepage-breakfast-button',
    },
    {
      title: 'Lunch',
      logoLocation: 'assets/images/meal-times/lunch.png',
      id: 'homepage-lunch-button',
    },
    {
      title: 'Dinner',
      logoLocation: 'assets/images/meal-times/dinner.png',
      id: 'homepage-dinner-button',
    },

    {
      title: 'Dessert',
      logoLocation: 'assets/images/meal-times/dessert.png',
      id: 'homepage-dessert-button',
    },
    {
      title: 'Appetizer',
      logoLocation: 'assets/images/meal-times/appetizers.png',
      id: 'homepage-apptizers-button',
    },
    {
      title: 'Beverage',
      logoLocation: 'assets/images/meal-times/beverages.png',
      id: 'homepage-beverages-button',
    },
  ];

  ngOnInit() {
    this.prefrenceButtonTitles = this.preferenceButtonData.map((catData) => {
      return catData['title'].toLowerCase();
    });

    this.nationalityButtonTitles = this.nationalityButtonData.map((catData) => {
      return catData['title'].toLowerCase();
    });

    this.mealsTimesButtonTitles = this.mealsTimesButtonData.map((catData) => {
      return catData['title'].toLowerCase();
    });
  }

  categoryButtonClickHandler(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;

    let targetId = target.id;

    if (targetId.length === 0) {
      targetId = event.target.parentNode.id;
    }

    const indexOfFirstIdDash = targetId.indexOf('-');
    const firstDashRemovedId = targetId.slice(
      indexOfFirstIdDash + 1,
      targetId.length
    );
    const indexOfSecondIdDash = firstDashRemovedId.indexOf('-');
    const extractedId = firstDashRemovedId.slice(0, indexOfSecondIdDash);

    // Filtering by cat

    if (this.prefrenceButtonTitles.includes(extractedId)) {
      return;
    }
    if (this.nationalityButtonTitles.includes(extractedId)) {
      this.store.dispatch(
        HomepageActions.updateSelectedhomepagemealnationality({
          selectedMealNationality: extractedId,
        })
      );

      return;
    }

    if (this.mealsTimesButtonTitles.includes(extractedId)) {
      this.store.dispatch(
        HomepageActions.updateSelectedhomepagemealtime({
          selectedMealTime: extractedId,
        })
      );
      return;
    }
  }
}
