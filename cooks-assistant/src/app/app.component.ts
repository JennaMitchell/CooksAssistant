import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { lockWebpageViewPortSelector } from 'libs/store/popups/popup-selectors';
import {
  loginPopupActiveSelector,
  signupPopupActiveSelector,
} from 'libs/store/popups/popup-selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store) {}
  title = 'Cooks Assistant';
  lockWebpageViewPortSelectorObserver$ = this.store.select(
    lockWebpageViewPortSelector
  );
  loginPopupActiveObserver$ = this.store.select(loginPopupActiveSelector);
  signupPopupActiveObserver$ = this.store.select(signupPopupActiveSelector);

  signupPopupActive = false;
  loginPopupActive = false;

  ngOnInit() {
    this.lockWebpageViewPortSelectorObserver$.subscribe((value) => {
      if (value) {
        window.scrollTo(0, 0);
        document
          .getElementsByTagName('body')[0]
          .classList.add('app-lock-viewport');
      } else {
        if (
          document
            .getElementsByTagName('body')[0]
            .classList.contains('app-lock-viewport')
        ) {
          document
            .getElementsByTagName('body')[0]
            .classList.remove('app-lock-viewport');
        }
      }
    });

    this.loginPopupActiveObserver$.subscribe((value) => {
      this.loginPopupActive = value;
    });
    this.signupPopupActiveObserver$.subscribe((value) => {
      this.signupPopupActive = value;
    });
  }
}
