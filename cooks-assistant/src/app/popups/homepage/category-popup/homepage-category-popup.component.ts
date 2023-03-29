import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PopupActions } from 'libs/store/popups/popup-actions.actions';
@Component({
  selector: 'homepage-category-popup',
  templateUrl: './homepage-category-popup.component.html',
  styleUrls: ['./homepage-category-popup.component.css'],
  providers: [],
})
export class HomepageCategoryPopupComponent {
  constructor(private store: Store) {}

  closingButtonHandler() {}
}
