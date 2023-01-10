import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor() {}
  ngOnInit() {}
}
