import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateRecipeButtonModule } from '../../create-button/create-recipe-button.module';

import { RecipeTemplateOne } from './recipe-template-1.component';

@NgModule({
  declarations: [RecipeTemplateOne],

  imports: [CommonModule, CreateRecipeButtonModule],
  exports: [RecipeTemplateOne],
})
export class RecipeTemplateOneModule {}
