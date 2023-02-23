import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeTemplateOne } from './recipe-template-1.component';

@NgModule({
  declarations: [RecipeTemplateOne],

  imports: [CommonModule],
  exports: [RecipeTemplateOne],
})
export class RecipeTemplateOneModule {}
