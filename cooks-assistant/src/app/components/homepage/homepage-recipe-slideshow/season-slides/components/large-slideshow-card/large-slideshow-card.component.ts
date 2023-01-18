import { Component, Input } from '@angular/core';
import { RecipeTagFilter } from 'src/app/utilities/recipe-tag-filter/recipe-tag-filter.service';
@Component({
  selector: 'large-slideshow-card',
  templateUrl: './large-slideshow-card.component.html',
  styleUrls: ['./large-slideshow-card.component.css'],
  providers: [RecipeTagFilter],
})
export class LargeSlideShowCard {
  @Input('title') title = '';
  @Input('imageUrl') imageUrl = '';
  @Input('cookingTime') cookingTime = '';
  @Input('tagsImageArray') tagsImageArray: string[] = [];

  renderReadyCookingTimeString = '';

  ngInit() {
    const cookingTimeConvertedToNumber = +this.cookingTime;
    if (cookingTimeConvertedToNumber >= 60) {
      let numberOfHours = Math.floor(cookingTimeConvertedToNumber / 60);

      if (numberOfHours >= 24) {
        const numberOfDays = Math.floor(
          cookingTimeConvertedToNumber / (60 * 24)
        );

        const remainingMinutesAfterDays =
          cookingTimeConvertedToNumber - numberOfDays * (60 * 24);

        if (remainingMinutesAfterDays >= 60) {
          const numberOfHoursAfterDays = Math.floor(
            remainingMinutesAfterDays / 60
          );
          const remainingMinutesAfterDaysAndHours =
            remainingMinutesAfterDays - numberOfHoursAfterDays * 60;

          if (remainingMinutesAfterDaysAndHours === 0) {
            this.renderReadyCookingTimeString = `${numberOfDays}days ${numberOfHoursAfterDays}hrs`;
          } else {
            this.renderReadyCookingTimeString = `${numberOfDays}days ${numberOfHoursAfterDays}hrs ${remainingMinutesAfterDaysAndHours}min`;
          }
        } else {
          const remainingMinutesAfterDays =
            cookingTimeConvertedToNumber - numberOfDays * (60 * 24);

          if (remainingMinutesAfterDays === 0) {
            this.renderReadyCookingTimeString = `${numberOfDays}days`;
          } else {
            this.renderReadyCookingTimeString = `${numberOfDays}days  ${remainingMinutesAfterDays}min`;
          }
        }
      } else {
        const remainingMinutes =
          cookingTimeConvertedToNumber - numberOfHours * 60;
        if (remainingMinutes === 0) {
          this.renderReadyCookingTimeString = `${numberOfHours}hrs`;
        } else {
          this.renderReadyCookingTimeString = `${numberOfHours}hrs ${remainingMinutes}min`;
        }
      }
    } else {
      this.renderReadyCookingTimeString = `${this.cookingTime}min`;
    }
  }
}
