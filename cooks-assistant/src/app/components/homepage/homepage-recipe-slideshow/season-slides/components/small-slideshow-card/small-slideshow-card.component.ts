import { Component, Input } from '@angular/core';
import { RecipeTagFilter } from 'src/app/utilities/recipe-tag-filter/recipe-tag-filter.service';
@Component({
  selector: 'small-slideshow-card',
  templateUrl: './small-slideshow-card.component.html',
  styleUrls: ['./small-slideshow-card.component.css'],
  providers: [RecipeTagFilter],
})
export class SmallSlideShowCard {
  @Input('title') title = '';
  @Input('imageUrl') imageUrl = '';
}
