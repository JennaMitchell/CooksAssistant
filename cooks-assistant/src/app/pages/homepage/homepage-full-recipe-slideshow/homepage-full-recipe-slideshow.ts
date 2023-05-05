import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomepageFullSlideshowRecipeCardModule } from './full-slideshow-recipe-card/full-slideshow-recipe-card.module';
import { HomepageFullRecipeSlideshow } from './homepage-full-recipe-slideshow.component';
import { HomepageMobilePreviewPopupModule } from 'src/app/popups/homepage-mobile-preview-section-popup/homepage-mobile-preview-popup.module';
@NgModule({
  declarations: [HomepageFullRecipeSlideshow],

  imports: [
    CommonModule,
    HomepageFullSlideshowRecipeCardModule,
    HomepageMobilePreviewPopupModule,
  ],
  exports: [HomepageFullRecipeSlideshow],
})
export class HomepageFullRecipeSlideshowModule {}
