import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { lockWebpageViewPortSelector } from 'libs/store/popups/popup-selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lockWebpageViewPortStoreValue$ = this.store.select(
    lockWebpageViewPortSelector
  );
  lockWebpageViewPort: boolean = true;
  constructor(private store: Store) {}
  title = 'Cooks Assistant';

  ngOnInit() {
    this.lockWebpageViewPortStoreValue$.subscribe((value) => {
      this.lockWebpageViewPort = value;
      const appElement = document.getElementsByTagName(
        'body'
      )[0] as HTMLBodyElement;
      if (value) {
        appElement?.classList.add('app-lock-viewport');
      } else {
        appElement?.classList.remove('app-lock-viewport');
      }
    });
  }
}
