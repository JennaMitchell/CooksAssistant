import { Component } from '@angular/core';
import { PopupActions } from 'libs/store/popups/popup.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'homepage-login-buttons',
  templateUrl: './homepage-login-buttons.component.html',
  styleUrls: ['./homepage-login-buttons.component.css'],
})
export class HomepageLoginButtons {
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
