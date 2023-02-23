import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { lockWebpageViewPortSelector } from 'libs/store/popups/popup-selectors';
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
  }
}
