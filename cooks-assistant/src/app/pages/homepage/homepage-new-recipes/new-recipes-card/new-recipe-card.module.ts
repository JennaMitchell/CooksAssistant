import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomepageNewRecipeCard } from './new-recipe-card.component';

@NgModule({
  declarations: [HomepageNewRecipeCard],

  imports: [CommonModule],
  exports: [HomepageNewRecipeCard],
  providers: [],
})
export class HomepageNewRecipeCardModule {}
