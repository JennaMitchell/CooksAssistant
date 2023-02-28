import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeTemplateTwo } from './recipe-template-2.component';

@NgModule({
  declarations: [RecipeTemplateTwo],

  imports: [CommonModule],
  exports: [RecipeTemplateTwo],
})
export class RecipeTemplateTwoModule {}
