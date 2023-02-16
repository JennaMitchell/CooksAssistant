import { Component, Input } from '@angular/core';
import { CookingTimeStringConverterService } from 'src/app/utilities/cooking-time-string-converter/cooking-time-string-converter.service';

@Component({
  selector: 'large-slideshow-card',
  templateUrl: './large-slideshow-card.component.html',
  styleUrls: ['./large-slideshow-card.component.css'],
  providers: [CookingTimeStringConverterService],
})
export class LargeSlideShowCard {
  constructor(
    private cookingTimeStringConverterService: CookingTimeStringConverterService
  ) {}
  @Input('title') title = '';
  @Input('imageUrl') imageUrl = '';
  @Input('cookingTime') cookingTime = '';
  @Input('tagsImageArray') tagsImageArray: string[] = [];

  ngOnInit() {
    this.cookingTime =
      this.cookingTimeStringConverterService.cookingTimeStringConverter(
        +this.cookingTime
      );
  }
}
