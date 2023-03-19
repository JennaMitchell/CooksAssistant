import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { usernameSelector } from 'libs/store/auth/auth-selectors';

import {
  selectedTagsSelector,
  selectedTemplateIndexSelector,
} from 'libs/store/recipe-creator/recipe-creator-selectors';
import { RecipeCreatorApiService } from 'src/app/utilities/api-call-functions/recipe-creator-api-call-functions/recipe-creator-api-calls.service';
import { Router } from '@angular/router';
import { tokenSelector } from 'libs/store/auth/auth-selectors';
import { PopupActions } from 'libs/store/popups/popup-actions.actions';

@Component({
  selector: 'create-recipe-button',
  templateUrl: './create-recipe-button.component.html',
  styleUrls: ['./create-recipe-button.component.css'],
  providers: [RecipeCreatorApiService],
})
export class CreateRecipeButtonComponent {
  @Input() templateData = {
    title: '',
    quote: '',
    servings: '',
    prepTime: '',
    cookingTime: '',
    ingredientsList: [''],
    directionsList: [''],
    notes: [''],
    description: '',
    selectedRecipeDishImageIndex: 0,
  };
  constructor(
    private store: Store,
    private recipeCreatorApiService: RecipeCreatorApiService,
    private router: Router
  ) {}

  selectedTagsObserver$ = this.store.select(selectedTagsSelector);
  selectedTags: string[] = [];
  tokenSelectorObserver$ = this.store.select(tokenSelector);
  userToken = '';

  usernameObserver$ = this.store.select(usernameSelector);
  username = '';

  selectedTemplateIndexObserver$ = this.store.select(
    selectedTemplateIndexSelector
  );
  selectedTemplateIndex = 0;

  ngOnInit() {
    this.usernameObserver$.subscribe((value) => {
      this.username = value;
    });
    this.selectedTemplateIndexObserver$.subscribe((value) => {
      this.selectedTemplateIndex = value;
    });
    this.tokenSelectorObserver$.subscribe((value) => {
      this.userToken = value;
    });
    this.selectedTagsObserver$.subscribe((value) => {
      this.selectedTags = value;
    });
  }

  createButtonClick() {
    const dataToBeSent = JSON.parse(JSON.stringify(this.templateData));
    dataToBeSent['username'] = this.username;
    dataToBeSent['selectedTemplateIndex'] = this.selectedTemplateIndex;
    dataToBeSent['tags'] = this.selectedTags;

    if (dataToBeSent['description'].length === 0) {
      dataToBeSent['description'] = 'None';
    }

    this.recipeCreatorApiService
      .recipeCreatorCall(dataToBeSent, this.userToken)
      .then(() => {
        this.store.dispatch(
          PopupActions.updateSuccesspopupactive({ successPopupActive: true })
        );
        this.store.dispatch(
          PopupActions.updateSuccesspopuptext({
            successPopupText: 'SUCCESS: Recipe Created',
          })
        );
        return;
      })
      .catch((err) => {});

    this.router.navigateByUrl('/');
  }
}
