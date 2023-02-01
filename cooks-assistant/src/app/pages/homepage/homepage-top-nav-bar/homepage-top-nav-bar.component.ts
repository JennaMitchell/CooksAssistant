import { Component } from '@angular/core';

@Component({
  selector: 'homepage-top-nav-bar',
  templateUrl: './homepage-top-nav-bar.component.html',
  styleUrls: ['./homepage-top-nav-bar.component.css'],
})
export class HomepageTopNavBar {
  recipesButtonHover = false;
  categoriesButtonHover = false;
  popularButtonHover = false;
  searchButtonHover = false;

  onRecipeButtonHover() {
    this.recipesButtonHover = !this.recipesButtonHover;
  }
  onCategoriesButtonHover() {
    this.categoriesButtonHover = !this.categoriesButtonHover;
  }

  onPopularButtonHover() {
    this.popularButtonHover = !this.popularButtonHover;
  }
  onSearchButtonHover() {
    this.searchButtonHover = !this.searchButtonHover;
  }

  constructor() {}
  ngOnInit() {}
}
