import { NgModule } from '@angular/core';

import { Homepage } from './homepage.component';
import { HomepageLoginButtons } from './homepage-login-buttons/homepage-login-buttons.component';
import { RouterModule } from '@angular/router';
import { HomepageTopNavBar } from './homepage-top-nav-bar/homepage-top-nav-bar.component';
import { CommonModule } from '@angular/common';
import { HomepageRecipeSlideshowModule } from './homepage-recipe-slideshow/homepage-recipe-slideshow.module';
import { HomepagePreferenceSlideshowModule } from './homepage-preference-slides/homepage-preference-slideshow.module';
import { HomepageRecipeCategoriesModule } from './homepage-recipe-categories/homepage-recipe-categories.module';
import { HomepageCuisineSectionModule } from './homepage-cuisines-section/homepage-cuisines-section.module';
import { HomepageCookingTimeSlideshowModule } from './homepage-cooking-times-slideshow/homepage-cooking-time-recipe-slideshow.module';
import { HomepageSocialMediaSectionModule } from './homepage-social-media-section/homepage-social-media-section.module';
import { HomepageFooterModule } from './homepage-footer/homepage-footer.module';
import { StoreModule } from '@ngrx/store';
import { LoginPopupModule } from 'src/app/popups/login/login-popup.module';
import { SignupPopupModule } from 'src/app/popups/signup/signup-popup.module';
@NgModule({
  declarations: [Homepage, HomepageLoginButtons, HomepageTopNavBar],

  imports: [
    RouterModule.forChild([{ path: '', component: Homepage }]),
    CommonModule,
    HomepageRecipeSlideshowModule,
    HomepagePreferenceSlideshowModule,
    HomepageRecipeCategoriesModule,
    HomepageCuisineSectionModule,
    HomepageCookingTimeSlideshowModule,
    HomepageFooterModule,
    HomepageSocialMediaSectionModule,
    StoreModule,
    LoginPopupModule,
    SignupPopupModule,
  ],
})
export class HomepageModule {}
