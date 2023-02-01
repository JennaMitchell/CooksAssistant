import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomepageNewRecipeCardModule } from './new-recipes-card/new-recipe-card.module';
import { HomepageNewRecipeSlideshow } from './homepage-new-recipe-slideshow.component';

@NgModule({
  declarations: [HomepageNewRecipeSlideshow],

  imports: [CommonModule, HomepageNewRecipeCardModule],
  exports: [HomepageNewRecipeSlideshow],
})
export class HomepageNewRecipeSlideshowModule {}
