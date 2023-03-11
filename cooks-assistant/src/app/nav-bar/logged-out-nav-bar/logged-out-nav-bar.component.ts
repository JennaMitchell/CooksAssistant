import { Component } from '@angular/core';
import { PopupActions } from 'libs/store/popups/popup.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'logged-out-nav-bar',
  templateUrl: './logged-out-nav-bar.component.html',
  styleUrls: ['./logged-out-nav-bar.component.css'],
})
export class LoggedOutNavBar {
  loginButtonHover = false;
  registerButtonHover = false;

  onLoginButtonHover() {
    this.loginButtonHover = !this.loginButtonHover;
  }
  onRegisterButtonHover() {
    this.registerButtonHover = !this.registerButtonHover;
  }

  constructor(private store: Store) {}
  loginButtonHandler() {
    this.store.dispatch(PopupActions.updateLockwebpageviewport({ lock: true }));
    this.store.dispatch(
      PopupActions.updateLoginpopupactive({ loginPopupActive: true })
    );
  }
  signupButtonHandler() {
    this.store.dispatch(PopupActions.updateLockwebpageviewport({ lock: true }));
    this.store.dispatch(
      PopupActions.updateSignuppopupactive({ signupPopupActive: true })
    );
  }

  ngOnInit() {}
}
