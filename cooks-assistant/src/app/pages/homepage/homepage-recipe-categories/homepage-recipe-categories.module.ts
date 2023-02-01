import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRecipeCategories } from './homepage-recipe-categories.component';
@NgModule({
  declarations: [HomepageRecipeCategories],

  imports: [CommonModule],
  exports: [HomepageRecipeCategories],
})
export class HomepageRecipeCategoriesModule {}
