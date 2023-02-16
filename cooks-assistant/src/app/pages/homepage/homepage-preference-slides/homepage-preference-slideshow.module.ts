import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomepagePreferenceCardModule } from './preference-recipes-card/preference-card.module';
import { HomepagePreferenceSlideshow } from './homepage-preference-slideshow.component';

@NgModule({
  declarations: [HomepagePreferenceSlideshow],

  imports: [CommonModule, HomepagePreferenceCardModule],
  exports: [HomepagePreferenceSlideshow],
})
export class HomepagePreferenceSlideshowModule {}
