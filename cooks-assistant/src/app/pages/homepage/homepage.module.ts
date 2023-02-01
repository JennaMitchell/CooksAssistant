import { NgModule } from '@angular/core';

import { Homepage } from './homepage.component';
import { HomepageLoginButtons } from './homepage-login-buttons/homepage-login-buttons.component';
import { RouterModule } from '@angular/router';
import { HomepageTopNavBar } from './homepage-top-nav-bar/homepage-top-nav-bar.component';
import { CommonModule } from '@angular/common';
import { HomepageRecipeSlideshowModule } from './homepage-recipe-slideshow/homepage-recipe-slideshow.module';
import { HomepageNewRecipeSlideshowModule } from './homepage-new-recipes/homepage-new-recipe-slideshow.module';
import { HomepageRecipeCategoriesModule } from './homepage-recipe-categories/homepage-recipe-categories.module';
import { HomepageCuisineSectionModule } from './homepage-cuisines-section/homepage-cuisines-section.module';
import { HomepageCookingTimeSlideshowModule } from './homepage-cooking-times-slideshow/homepage-cooking-time-recipe-slideshow.module';
import { HomepageFooterModule } from './homepage-footer/homepage-footer.module';
@NgModule({
  declarations: [Homepage, HomepageLoginButtons, HomepageTopNavBar],

  imports: [
    RouterModule.forChild([{ path: '', component: Homepage }]),
    CommonModule,
    HomepageRecipeSlideshowModule,
    HomepageNewRecipeSlideshowModule,
    HomepageRecipeCategoriesModule,
    HomepageCuisineSectionModule,
    HomepageCookingTimeSlideshowModule,
    HomepageFooterModule,
  ],
})
export class HomepageModule {}
