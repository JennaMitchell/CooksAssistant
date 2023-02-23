import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateTemplateTextPopupDataSelector } from 'libs/store/popups/popup-selectors';
import { PopupActions } from 'libs/store/popups/popup.actions';
import { TextAreaResizerService } from '../../../../utilities/text-area-resizing/text-area-resizing.service';

interface IdToGetInterface {
  [key: string]: { id: string; fieldIndex: number; popupTitle: string };
}
@Component({
  selector: 'recipe-template-one',
  templateUrl: './recipe-template-1.component.html',
  styleUrls: ['./recipe-template-1.component.css'],
  providers: [TextAreaResizerService],
})
export class RecipeTemplateOne {
  constructor(
    private store: Store,
    private textAreaResizerService: TextAreaResizerService
  ) {}
  updateTemplateTextPopupDataObserver$ = this.store.select(
    updateTemplateTextPopupDataSelector
  );
  activeTextAreaId = '';

  templateData = {
    title: 'Chicken Salad',
    quote: 'Perfect for an easy lunch',
    servings: '3',
    prepTime: '3 MIN',
    cookingTime: '3 MIN',
    ingredientsList: ['300ml'],
    directionsList: ['This line of text needs to break onto the next line'],
  };

  textAreaInputHandler(event: Event) {
    const targetElement = event.target as HTMLTextAreaElement;

    this.textAreaResizerService.textAreaInputHandler(targetElement);
  }

  ngOnInit() {
    const textAreas = document.getElementsByTagName('textarea');
    for (
      let indexOfTextArea = 0;
      indexOfTextArea < textAreas.length;
      indexOfTextArea++
    ) {
      this.textAreaResizerService.textHeightSizer(textAreas[indexOfTextArea]);
    }
  }
}
