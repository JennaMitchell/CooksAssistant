import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomepageCookingTimeRecipeCardModule } from './cooking-time-recipe-card/cooking-time-recipe-card.module';
import { HomepageCookingTimeRecipeSlideshow } from './homepage-cooking-time-recipe-slideshow.component';
@NgModule({
  declarations: [HomepageCookingTimeRecipeSlideshow],

  imports: [CommonModule, HomepageCookingTimeRecipeCardModule],
  exports: [HomepageCookingTimeRecipeSlideshow],
})
export class HomepageCookingTimeSlideshowModule {}
