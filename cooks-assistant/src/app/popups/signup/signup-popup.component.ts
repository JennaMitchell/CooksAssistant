import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PopupActions } from 'libs/store/popups/popup.actions';
import { RandomStringGeneratorsService } from 'src/app/utilities/random-string-generator/random-string-generators.service';
import { SignupApiCallsService } from 'src/app/utilities/api-call-functions/signup-api-call-functions/signup-api-calls.service';
import { AuthActions } from 'libs/store/auth/auth.actions';

@Component({
  selector: 'signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.css'],
  providers: [RandomStringGeneratorsService, SignupApiCallsService],
})
export class SignupPopupComponent {
  activeInputObject = {
    usernameActive: false,
    passwordActive: false,
    confirmPasswordActive: false,
  };
  generatedUsername = '';
  generatedPassword = '';
  generatedEmail = '';

  constructor(
    private store: Store,
    private randomStringGenerators: RandomStringGeneratorsService,
    private signupApiCallsService: SignupApiCallsService
  ) {}

  ngOnInit() {
    this.generatedUsername = this.randomStringGenerators.generateUsername();
    this.generatedPassword = this.randomStringGenerators.generatePassword();
    this.generatedEmail = this.randomStringGenerators.generateEmail();
  }

  activeElementExtractor(id: string) {
    const splitId = id.split('-');

    for (
      let indexOfSplitId = 0;
      indexOfSplitId < splitId.length;
      indexOfSplitId++
    ) {
      if (splitId[indexOfSplitId] === 'confirm') {
        return 'confirm';
      } else if (splitId[indexOfSplitId] === 'password') {
        return 'password';
      } else if (splitId[indexOfSplitId] === 'username') {
        return 'username';
      }
    }
    return '';
  }

  inputValueCheck(activeElement: string, mouseEventType: string) {
    const usernameInputElement = document.getElementById(
      'signup-popup-username-input'
    ) as HTMLInputElement;

    const passwordInputElement = document.getElementById(
      'signup-popup-password-input'
    ) as HTMLInputElement;
    const confirmPasswordInputElement = document.getElementById(
      'signup-popup-confirm-password-input'
    ) as HTMLInputElement;

    const updatedActiveInputObject = {
      usernameActive: usernameInputElement.value.length === 0 ? false : true,
      passwordActive: passwordInputElement.value.length === 0 ? false : true,
      confirmPasswordActive:
        confirmPasswordInputElement.value.length === 0 ? false : true,
    };
    switch (activeElement) {
      case 'confirm':
        updatedActiveInputObject.confirmPasswordActive =
          mouseEventType === 'Enter' && true;
        break;
      case 'password':
        updatedActiveInputObject.passwordActive =
          mouseEventType === 'Enter' && true;
        break;
      case 'username':
        updatedActiveInputObject.usernameActive =
          mouseEventType === 'Enter' && true;
        break;
      default:
        break;
    }

    this.activeInputObject = updatedActiveInputObject;
  }

  inputContainerMouseEnterHandler($event: MouseEvent) {
    const mouseEnteredElement = $event.target as HTMLElement;
    const mouseEnteredElementId = mouseEnteredElement.id;

    const activeElement = this.activeElementExtractor(mouseEnteredElementId);

    const usernameLabelElement = document.getElementById(
      'signup-popup-username-input-label'
    ) as HTMLLabelElement;
    const passwordLabelElement = document.getElementById(
      'signup-popup-password-input-label'
    ) as HTMLLabelElement;
    const confirmPasswordLabelElement = document.getElementById(
      'signup-popup-confirm-password-input-label'
    ) as HTMLLabelElement;
    this.inputValueCheck(activeElement, 'Enter');
    this.activeInputObject.usernameActive &&
      !usernameLabelElement.classList.contains(
        'signup-popup-input-label-moved'
      ) &&
      usernameLabelElement.classList.add('signup-popup-input-label-moved');

    this.activeInputObject.passwordActive &&
      !passwordLabelElement.classList.contains(
        'signup-popup-input-label-moved'
      ) &&
      passwordLabelElement.classList.add('signup-popup-input-label-moved');

    this.activeInputObject.confirmPasswordActive &&
      !confirmPasswordLabelElement.classList.contains(
        'signup-popup-input-label-moved'
      ) &&
      confirmPasswordLabelElement.classList.add(
        'signup-popup-input-label-moved'
      );
  }

  inputContainerMouseLeaveHandler($event: MouseEvent) {
    const mouseEnteredElement = $event.target as HTMLElement;
    const mouseEnteredElementId = mouseEnteredElement.id;

    const activeElement = this.activeElementExtractor(mouseEnteredElementId);
    const usernameInputElement = document.getElementById(
      'signup-popup-username-input'
    ) as HTMLInputElement;

    const passwordInputElement = document.getElementById(
      'signup-popup-password-input'
    ) as HTMLInputElement;
    const confirmPasswordInputElement = document.getElementById(
      'signup-popup-confirm-password-input'
    ) as HTMLInputElement;

    const usernameLabelElement = document.getElementById(
      'signup-popup-username-input-label'
    ) as HTMLLabelElement;
    const passwordLabelElement = document.getElementById(
      'signup-popup-password-input-label'
    ) as HTMLLabelElement;
    const confirmPasswordLabelElement = document.getElementById(
      'signup-popup-confirm-password-input-label'
    ) as HTMLLabelElement;
    this.inputValueCheck(activeElement, 'Exit');
    !this.activeInputObject.usernameActive &&
      usernameLabelElement.classList.contains(
        'signup-popup-input-label-moved'
      ) &&
      usernameInputElement.value.length === 0 &&
      usernameLabelElement.classList.remove('signup-popup-input-label-moved');

    !this.activeInputObject.passwordActive &&
      passwordLabelElement.classList.contains(
        'signup-popup-input-label-moved'
      ) &&
      passwordInputElement.value.length === 0 &&
      passwordLabelElement.classList.remove('signup-popup-input-label-moved');

    !this.activeInputObject.confirmPasswordActive &&
      confirmPasswordLabelElement.classList.contains(
        'signup-popup-input-label-moved'
      ) &&
      confirmPasswordInputElement.value.length === 0 &&
      confirmPasswordLabelElement.classList.remove(
        'signup-popup-input-label-moved'
      );
  }

  closingButtonHandler() {
    this.store.dispatch(
      PopupActions.updateLockwebpageviewport({ lock: false })
    );
    this.store.dispatch(
      PopupActions.updateSignuppopupactive({ signupPopupActive: false })
    );
  }

  signupButtonHandler() {
    this.signupApiCallsService
      .signupCall({
        email: this.generatedEmail,
        username: this.generatedUsername,
        password: this.generatedPassword,
      })
      .then((data) => {
        if (data.error.length === 0) {
          return data.response?.json();
        } else {
          throw new Error(`${data.error}`);
        }
      })
      .then((jsonedData: any) => {
        console.log(jsonedData);
        this.store.dispatch(
          AuthActions.updateEmail({ email: this.generatedEmail })
        );
        this.store.dispatch(AuthActions.updateLoggedin({ loggedIn: true }));

        this.store.dispatch(
          AuthActions.updateToken({ token: jsonedData.token })
        );

        this.store.dispatch(
          AuthActions.updateUserid({ userId: jsonedData.userId })
        );

        this.store.dispatch(
          AuthActions.updateUsername({ username: this.generatedUsername })
        );

        this.closingButtonHandler();
      })
      .catch((err) => {
        this.store.dispatch(
          PopupActions.updateErrormessage({ errorMessage: err.toString() })
        );
        this.store.dispatch(
          PopupActions.updateErrorpopupactive({ errorPopupActive: true })
        );
      });
  }
  loginButtonHandler() {
    this.store.dispatch(
      PopupActions.updateLoginpopupactive({ loginPopupActive: true })
    );
    this.store.dispatch(
      PopupActions.updateSignuppopupactive({ signupPopupActive: false })
    );
  }
}
