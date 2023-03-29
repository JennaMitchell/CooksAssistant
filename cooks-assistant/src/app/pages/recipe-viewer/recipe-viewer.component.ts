import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { loggedInSelector } from 'libs/store/auth/auth-selectors';
import {
  errorPopupActiveSelector,
  signupPopupActiveSelector,
} from 'libs/store/popups/popup-selectors';
import { RecipeDataApiCalls } from 'src/app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { ActivatePopupService } from 'src/app/utilities/activate-popup-functions/activate-popup-functions.service';
import { switchMap } from 'rxjs';
import { GetRecipeDataSuccessfulResponseInterface } from 'src/app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
import { RecipeTemplateSavedDataInterfaceWithId } from '../../../app/utilities/api-call-functions/recipe-data-api-calls/recipe-data-api-calls.service';
@Component({
  selector: 'recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.css'],
  providers: [RecipeDataApiCalls, ActivatePopupService],
})
export class RecipeViewerComponent {
  constructor(
    private store: Store,
    private route: ActivatedRoute,

    private recipeDataApiCalls: RecipeDataApiCalls,
    private activatePopupService: ActivatePopupService
  ) {}
  loggedInObserver$ = this.store.select(loggedInSelector);
  loggedIn = false;

  loginPopupActiveObserver$ = this.store.select(loggedInSelector);
  loginPopupActive = false;

  signupPopupActiveObserver$ = this.store.select(signupPopupActiveSelector);
  signupPopupActive = false;

  errorPopupActiveObserver$ = this.store.select(errorPopupActiveSelector);
  errorPopupActive = false;

  x$: any;
  retrievedData: RecipeTemplateSavedDataInterfaceWithId = {
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
    username: '',
    selectedTemplateIndex: 0,
    tags: [''],
    ratings: [],
    numberOfMakes: 0,
    _id: '',
  };

  returnIdSetter(id: string) {
    this.recipeDataApiCalls
      .getRecipeDataById(id)
      .then((data: GetRecipeDataSuccessfulResponseInterface) => {
        this.retrievedData = data.retrievedData[0];

        const tempTagsArray = this.retrievedData.tags.map((tag) => {
          if (tag.length !== 0) {
            const firstLetter = tag[0].toUpperCase();
            const finalWord = firstLetter + tag.slice(1, tag.length);
            return finalWord;
          } else {
            return '';
          }
        });
        this.retrievedData.tags = tempTagsArray;
      })
      .catch((err: Error) => {
        let message;
        if (err instanceof Error) message = err.message;
        else message = String(err);

        this.activatePopupService.errorPopupHandler(message);
      });
  }

  ngOnInit() {
    this.x$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.returnIdSetter(params.get('id')!);
        return params.get('id')!;
      })
    );
    this.x$.subscribe();

    this.loggedInObserver$.subscribe((value) => {
      this.loggedIn = value;
    });

    this.loginPopupActiveObserver$.subscribe((value) => {
      this.loginPopupActive = value;
    });
    this.signupPopupActiveObserver$.subscribe((value) => {
      this.signupPopupActive = value;
    });
    this.errorPopupActiveObserver$.subscribe((value) => {
      this.errorPopupActive = value;
    });
  }
}
