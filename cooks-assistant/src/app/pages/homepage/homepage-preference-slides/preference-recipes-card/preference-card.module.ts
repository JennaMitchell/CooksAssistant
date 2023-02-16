import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomepagePreferenceCard } from './preference-card.component';

@NgModule({
  declarations: [HomepagePreferenceCard],

  imports: [CommonModule],
  exports: [HomepagePreferenceCard],
  providers: [],
})
export class HomepagePreferenceCardModule {}
