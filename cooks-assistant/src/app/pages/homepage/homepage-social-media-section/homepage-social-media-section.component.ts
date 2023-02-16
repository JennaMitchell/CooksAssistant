import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { homepageMealTimeSelector } from 'libs/store/homepage/homepage-selectors';
import { Observable } from 'rxjs';
import { HomepageStateInterface } from 'libs/store/homepage/homepage-reducers';
import { HomepageActions } from 'libs/store/homepage/homepage.actions';

@Component({
  selector: 'homepage-social-media-section',
  templateUrl: './homepage-social-media-section.component.html',
  styleUrls: ['./homepage-social-media-section.component.css'],
  providers: [],
})
export class HomepageSocialMediaComponent {
  homepageMealTime$: Observable<string>;
  constructor(private store: Store<HomepageStateInterface>) {
    this.homepageMealTime$ = this.store.select(homepageMealTimeSelector);
  }
  value: any;

  ngOnInit() {
    this.value = this.homepageMealTime$.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
  }
}
