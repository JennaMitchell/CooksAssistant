import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeCreatorComponent } from './recipe-creator.component';
import { RouterModule } from '@angular/router';
import { BackgroundChangerPopupModule } from 'src/app/popups/recipe-creator/background-changer/background-changer.module';
import { RecipeTemplateOneModule } from './templates/template-1/recipe-template-1.module';
import { RecipeTemplateTwoModule } from './templates/template-2/recipe-template-2.module';
import { RecipeTemplateThreeModule } from './templates/template-3/recipe-template-3.module';
import { TemplateSelectorPopupModule } from 'src/app/popups/recipe-creator/template-selector/template-selector-popup.module';
import { ErrorPopupModule } from 'src/app/popups/error/error-popup.module';
import { LoggedOutNavBarModule } from 'src/app/nav-bar/logged-out-nav-bar/logged-out-nav-bar.module';
import { LoggedInNavBarModule } from 'src/app/nav-bar/logged-in-nav-bar/logged-in-nav-bar.module';
import { LoginPopupModule } from 'src/app/popups/login/login-popup.module';
import { SignupPopupModule } from 'src/app/popups/signup/signup-popup.module';
import { TagsSelectorPopupModule } from 'src/app/popups/recipe-creator/tags-selector/tags-selector-popup.module';
@NgModule({
  declarations: [RecipeCreatorComponent],

  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecipeCreatorComponent }]),
    BackgroundChangerPopupModule,
    RecipeTemplateOneModule,
    RecipeTemplateTwoModule,
    RecipeTemplateThreeModule,
    TemplateSelectorPopupModule,
    ErrorPopupModule,
    LoggedInNavBarModule,
    LoggedOutNavBarModule,
    LoginPopupModule,
    SignupPopupModule,
    TagsSelectorPopupModule,
  ],
})
export class RecipeCreatorModule {}
