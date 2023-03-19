import { Component } from '@angular/core';
import { PopupActions } from 'libs/store/popups/popup-actions.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'logged-in-nav-bar',
  templateUrl: './logged-in-nav-bar.component.html',
  styleUrls: ['./logged-in-nav-bar.component.css'],
})
export class LoggedInNavBar {
  constructor(private store: Store, private router: Router) {}
  loginButtonHover = false;
  registerButtonHover = false;
  createButtonHover = false;

  onLoginButtonHover() {
    this.loginButtonHover = !this.loginButtonHover;
  }
  onRegisterButtonHover() {
    this.registerButtonHover = !this.registerButtonHover;
  }
  onCreateButtonHover() {
    this.createButtonHover = !this.createButtonHover;
  }

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

  createButtonClickHandler() {
    this.router.navigateByUrl('/recipe-creator');
  }

  ngOnInit() {}
}
