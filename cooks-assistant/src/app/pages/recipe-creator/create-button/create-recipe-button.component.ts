import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { usernameSelector } from 'libs/store/auth/auth-selectors';
import { selectedTemplateIndexSelector } from 'libs/store/recipe-creator/recipe-creator-selectors';
import { RecipeCreatorApiService } from 'src/app/utilities/api-call-functions/recipe-creator-api-call-functions/recipe-creator-api-calls.service';
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
  };
  constructor(
    private store: Store,
    private recipeCreatorApiService: RecipeCreatorApiService
  ) {}

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
  }

  createButtonClick() {
    const dataToBeSent = JSON.parse(JSON.stringify(this.templateData));
    dataToBeSent['username'] = this.username;
    dataToBeSent['selectedTemplateIndex'] = this.selectedTemplateIndex;
    this.recipeCreatorApiService.recipeCreatorCall(dataToBeSent);
  }
}
