import { Component } from '@angular/core';
import { RecipeTagFilter } from 'src/app/utilities/recipe-tag-filter/recipe-tag-filter.service';
import { CookingTimeStringConverterService } from 'src/app/utilities/cooking-time-string-converter/cooking-time-string-converter.service';
import { NumberOfViewsReturnStringService } from 'src/app/utilities/number-of-views-converter/number-of-views-converter.service';
import { NationFlagImageRetrieverService } from 'src/app/utilities/nation-flag-image-retriever/nation-flag-image-retriever.service';
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
  selector: 'homepage-cooking-time-slideshow',
  templateUrl: './homepage-cooking-time-recipe-slideshow.component.html',
  styleUrls: ['./homepage-cooking-time-recipe-slideshow.component.css'],
  providers: [
    RecipeTagFilter,
    CookingTimeStringConverterService,
    NumberOfViewsReturnStringService,
    NationFlagImageRetrieverService,
  ],
})
export class HomepageCookingTimeRecipeSlideshow {
  currentlySelectedRecipeNumber = 0;
  numberOfMakesArray: string[] = [];
  rightDotsActive = false;
  leftDotsActive = true;
  middleSlideActive = true;
  postiveRatingArray: boolean[] = [];
  negativeRatingArray: boolean[] = [];
  postiveRatingActive = false;
  negativeRatingActive = false;
  halfStarActive = false;
  displayReadyNumberOfReviews = '';
  displayReadyCookingTime = '';
  displayReadyNumberOfMakes = '';
  flagLocation = '';
  nationOrigin = '';

  constructor(
    private cookingTimeStringConverterService: CookingTimeStringConverterService,
    private numberOfViewsReturnStringService: NumberOfViewsReturnStringService,
    private nationFlagImageRetrieverService: NationFlagImageRetrieverService
  ) {}

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
    this.infoPreper(this.tempData[0]);
  }

  infoPreper(tempDataEntry: DataEntryInterface) {
    this.displayReadyNumberOfReviews =
      this.numberOfViewsReturnStringService.numberOfViewsConverter(
        +tempDataEntry.numberOfReviews
      );
    this.displayReadyCookingTime =
      this.cookingTimeStringConverterService.cookingTimeStringConverter(
        +tempDataEntry.cookingTimeInMinutes
      );
    this.displayReadyNumberOfMakes =
      this.numberOfViewsReturnStringService.numberOfViewsConverter(
        +tempDataEntry.numberOfMakes
      );
    this.nationOrigin = tempDataEntry.countryMadeIn;
    this.flagLocation =
      this.nationFlagImageRetrieverService.nationFlagImageRetriever(
        tempDataEntry.countryMadeIn
      );
    let stringifiedRating = `${tempDataEntry.rating.toFixed(1)}`;
    const maxStarRating = 5;
    const tempPostiveStarArray = [];
    const tempNegativeStarArray = [];

    if (+stringifiedRating > 0 && +stringifiedRating < 5) {
      this.postiveRatingActive = true;
      this.negativeRatingActive = true;
    }
    if (+stringifiedRating === 0) {
      this.negativeRatingActive = true;
    }
    if (+stringifiedRating === maxStarRating) {
      this.postiveRatingActive = true;
    }

    if (stringifiedRating.includes('.')) {
      const indexOfDecimal = stringifiedRating.indexOf('.');
      const tenthsPlaceDecimalValue = +stringifiedRating[indexOfDecimal + 1];

      if (tenthsPlaceDecimalValue >= 1) {
        this.halfStarActive = true;
        stringifiedRating = stringifiedRating.slice(0, indexOfDecimal);
      } else {
        this.halfStarActive = false;
      }
    }

    for (
      let postiveStarIndex = 0;
      postiveStarIndex < +stringifiedRating;
      postiveStarIndex++
    ) {
      tempPostiveStarArray[postiveStarIndex] = true;
    }

    if (this.halfStarActive) {
      tempPostiveStarArray.splice(0, 1);
    }
    this.postiveRatingArray = tempPostiveStarArray;

    for (
      let negativeStarRating = 0;
      negativeStarRating < maxStarRating - +stringifiedRating;
      negativeStarRating++
    ) {
      tempNegativeStarArray[negativeStarRating] = true;
    }
    this.negativeRatingArray = tempNegativeStarArray;
  }

  toggleRightLogicButton() {
    const rightSquareButton = document.getElementById(
      'homepage-new-recipe-slideshow-right-tracker-button'
    );
    rightSquareButton?.classList.toggle(
      'homepage-new-recipe-slideshow-slide-tracker-button-active'
    );
  }
  toggleCenterLogicButton() {
    const centerSquareButton = document.getElementById(
      'homepage-new-recipe-slideshow-center-tracker-button'
    );
    centerSquareButton?.classList.toggle(
      'homepage-new-recipe-slideshow-slide-tracker-button-active'
    );
  }
  toggleCenterLogicButtonWithCheck() {
    const centerSquareButton = document.getElementById(
      'homepage-new-recipe-slideshow-center-tracker-button'
    );
    if (
      !centerSquareButton?.classList.contains(
        'homepage-new-recipe-slideshow-slide-tracker-button-active'
      )
    ) {
      centerSquareButton?.classList.toggle(
        'homepage-new-recipe-slideshow-slide-tracker-button-active'
      );
    }
  }
  toggleRightLogicButtonWithCheck() {
    const rightSquareButton = document.getElementById(
      'homepage-new-recipe-slideshow-right-tracker-button'
    );
    if (
      rightSquareButton?.classList.contains(
        'homepage-new-recipe-slideshow-slide-tracker-button-active'
      )
    ) {
      rightSquareButton?.classList.toggle(
        'homepage-new-recipe-slideshow-slide-tracker-button-active'
      );
    }
  }
  toggleLeftLogicButton() {
    const leftSquareButton = document.getElementById(
      'homepage-new-recipe-slideshow-left-tracker-button'
    );
    leftSquareButton?.classList.toggle(
      'homepage-new-recipe-slideshow-slide-tracker-button-active'
    );
  }
  toggleLeftLogicButtonWithCheck() {
    const leftSquareButton = document.getElementById(
      'homepage-new-recipe-slideshow-left-tracker-button'
    );
    if (
      leftSquareButton?.classList.contains(
        'homepage-new-recipe-slideshow-slide-tracker-button-active'
      )
    ) {
      leftSquareButton?.classList.toggle(
        'homepage-new-recipe-slideshow-slide-tracker-button-active'
      );
    }
  }

  slideButtonLogicChecker() {
    if (this.currentlySelectedRecipeNumber === 0) {
      this.rightDotsActive = false;
      this.leftDotsActive = true;
      this.middleSlideActive = true;
      this.toggleLeftLogicButton();
      this.toggleRightLogicButtonWithCheck();
      this.toggleCenterLogicButton();
    } else if (
      this.currentlySelectedRecipeNumber ===
      this.tempData.length - 1
    ) {
      this.rightDotsActive = false;
      this.leftDotsActive = true;
      this.middleSlideActive = true;
      this.toggleLeftLogicButtonWithCheck();
      this.toggleRightLogicButton();
      this.toggleCenterLogicButton();
    } else {
      this.rightDotsActive = true;
      this.leftDotsActive = true;
      this.middleSlideActive = true;
      this.toggleCenterLogicButtonWithCheck();

      this.toggleLeftLogicButtonWithCheck();
      this.toggleRightLogicButtonWithCheck();
    }
  }

  onLeftArrowClick() {
    if (this.currentlySelectedRecipeNumber === 0) {
      this.currentlySelectedRecipeNumber = this.tempData.length - 1;

      this.toggleLeftLogicButtonWithCheck();
      this.toggleRightLogicButton();
    } else {
      this.currentlySelectedRecipeNumber =
        this.currentlySelectedRecipeNumber - 1;
      this.slideButtonLogicChecker();
    }
    this.infoPreper(this.tempData[this.currentlySelectedRecipeNumber]);
  }
  onRightArrowClick() {
    if (this.currentlySelectedRecipeNumber === this.tempData.length - 1) {
      this.currentlySelectedRecipeNumber = 0;
      this.toggleLeftLogicButton();
      this.toggleRightLogicButtonWithCheck();
    } else {
      this.currentlySelectedRecipeNumber =
        this.currentlySelectedRecipeNumber + 1;
      this.slideButtonLogicChecker();
    }
    this.infoPreper(this.tempData[this.currentlySelectedRecipeNumber]);
  }
}
