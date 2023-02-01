import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomepageModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
