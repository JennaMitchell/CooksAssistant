import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loggedInSelector } from 'libs/store/auth/auth-selectors';
import { signupPopupActiveSelector } from 'libs/store/popups/popup-selectors';

@Component({
  selector: 'recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.css'],
  providers: [],
})
export class RecipeViewerComponent {
  constructor(private store: Store) {}
  loggedInObserver$ = this.store.select(loggedInSelector);
  loggedIn = false;

  loginPopupActiveObserver$ = this.store.select(loggedInSelector);
  loginPopupActive = false;

  signupPopupActiveObserver$ = this.store.select(signupPopupActiveSelector);
  signupPopupActive = false;
  ngOnInit() {
    this.loggedInObserver$.subscribe((value) => {
      this.loggedIn = value;
    });

    this.loginPopupActiveObserver$.subscribe((value) => {
      this.loginPopupActive = value;
    });
    this.signupPopupActiveObserver$.subscribe((value) => {
      this.signupPopupActive = value;
    });
  }
}
