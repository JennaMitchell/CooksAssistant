import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { homepageReducers } from 'libs/store/homepage/homepage-reducers';
import { popupReducers } from 'libs/store/popups/popup-reducers';
import { authReducers } from 'libs/store/auth/auth-reducers';
import { recipeCreatorReducers } from 'libs/store/recipe-creator/recipe-creator-reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    CommonModule,

    StoreModule.forRoot({
      homepage: homepageReducers,
      popup: popupReducers,
      auth: authReducers,
      recipeCreator: recipeCreatorReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
