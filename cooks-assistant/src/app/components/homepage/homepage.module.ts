import { NgModule } from '@angular/core';

import { Homepage } from './homepage.component';
import { HomepageLoginButtons } from './homepage-login-buttons/homepage-login-buttons.component';
import { RouterModule } from '@angular/router';
import { HomepageTopNavBar } from './homepage-top-nav-bar/homepage-top-nav-bar.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [Homepage, HomepageLoginButtons, HomepageTopNavBar],

  imports: [
    RouterModule.forChild([{ path: '', component: Homepage }]),
    CommonModule,
  ],
})
export class HomepageModule {}
