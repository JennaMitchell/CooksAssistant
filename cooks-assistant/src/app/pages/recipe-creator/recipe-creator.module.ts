import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeCreatorComponent } from './recipe-creator.component';
import { RouterModule } from '@angular/router';
import { BackgroundChangerPopupModule } from 'src/app/popups/recipe-creator/background-changer/background-changer.module';
import { RecipeTemplateOneModule } from './templates/template-1/recipe-template-1.module';
import { RecipeTemplateTwoModule } from './templates/template-2/recipe-template-2.module';

@NgModule({
  declarations: [RecipeCreatorComponent],

  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecipeCreatorComponent }]),
    BackgroundChangerPopupModule,
    RecipeTemplateOneModule,
    RecipeTemplateTwoModule,
  ],
})
export class RecipeCreatorModule {}
