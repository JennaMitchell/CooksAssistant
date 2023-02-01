import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageCookingTimeRecipeCard } from './cooking-time-recipe-card.component';

@NgModule({
  declarations: [HomepageCookingTimeRecipeCard],

  imports: [CommonModule],
  exports: [HomepageCookingTimeRecipeCard],
  providers: [],
})
export class HomepageCookingTimeRecipeCardModule {}
