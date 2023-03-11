import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'tags-container',
  templateUrl: './tags-container.component.html',
  styleUrls: ['./tags-container.component.css'],
  providers: [],
})
export class TagsContaienrComponent {
  constructor(private store: Store) {}
}
