import { NgModule } from '@angular/core';
import { LargeSlideShowCardModule } from '../components/large-slideshow-card/large-slideshow-card.module';
import { SmallSlideShowCard } from '../components/small-slideshow-card/small-slideshow-card.component';
import { SlideDisplay } from './slide-display.component';

@NgModule({
  declarations: [SlideDisplay, SmallSlideShowCard],

  imports: [LargeSlideShowCardModule],
  exports: [SlideDisplay],
})
export class SlideDisplayModule {}
