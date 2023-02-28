import { RecipeTemplateUserDataInterface } from 'libs/store/recipe-creator/recipe-creator-reducers';

interface KeyStringInterface {
  [key: string]: string;
}

export interface ReturnedCreatorRecipeDataAndIdsInterface {
  templateData: RecipeTemplateUserDataInterface;
  idsArray: string[];
}

export class RecipeCreatorFunctions {
  listTextAreaInputHandler(
    event: Event,
    acceptedListIdTypes: string[],
    templateData: RecipeTemplateUserDataInterface
  ) {
    const templateDataCopy = JSON.parse(JSON.stringify(templateData));
    const targetElement = event.target as HTMLTextAreaElement;
    const targetId = targetElement.id;
    const splitTargetId = targetId.split('-');
    let textAreaType = '';
    let textAreaListNumber = -1;
    for (
      let indexOfAcceptedTypes = 0;
      indexOfAcceptedTypes < acceptedListIdTypes.length;
      indexOfAcceptedTypes++
    ) {
      if (splitTargetId.includes(acceptedListIdTypes[indexOfAcceptedTypes])) {
        textAreaType = acceptedListIdTypes[indexOfAcceptedTypes];
      }
    }

    if (textAreaType.length !== 0) {
      textAreaListNumber = +splitTargetId[splitTargetId.length - 1];
    }

    if (textAreaListNumber !== -1) {
      switch (textAreaType) {
        case 'ingredients':
          templateDataCopy.ingredientsList[textAreaListNumber - 1] =
            targetElement.innerText;

          break;
        case 'directions':
          templateDataCopy.directionsList[textAreaListNumber - 1] =
            targetElement.innerText;

          break;
        case 'notes':
          templateDataCopy.notes[textAreaListNumber - 1] =
            targetElement.innerText;

          break;
        default:
          break;
      }
    }

    return templateDataCopy;
  }
  textHeightSizer(element: HTMLTextAreaElement) {
    element.style.height = element.scrollHeight + 'px';
    element.style.overflowY = 'hidden';
  }

  textAreaInputHandler(targetElement: HTMLTextAreaElement) {
    targetElement.style.height = '0';
    targetElement.style.height = targetElement.scrollHeight + 'px';
    targetElement.style.resize = 'none';

    this.textHeightSizer(targetElement);
  }

  addTextFieldButtonHandler(
    templateData: RecipeTemplateUserDataInterface,
    copyOfIdsList: string[],
    type: string
  ) {
    const tempObject = JSON.parse(JSON.stringify(templateData));
    let tempList: string[] = [];
    const copyOfIdsArray = copyOfIdsList.slice();

    switch (type) {
      case 'ingredients':
        tempList = tempObject.ingredientsList;
        tempList.push('New Ingredient');
        copyOfIdsArray.push(
          `recipe-template-one-ingredients-textarea-${
            copyOfIdsArray.length + 1
          }`
        );
        break;
      case 'directions':
        tempList = tempObject.directionsList;
        tempList.push(`${tempObject.directionsList.length + 1}. New Direction`);
        copyOfIdsArray.push(
          `recipe-template-one-directions-textarea-${copyOfIdsArray.length + 1}`
        );
        break;
      case 'notes':
        tempList = tempObject.notes;
        tempList.push(`-  New Note Added`);
        copyOfIdsArray.push(
          `recipe-template-one-notes-textarea-${copyOfIdsArray.length + 1}`
        );
        break;
      default:
        break;
    }

    tempObject.ingredientsList = tempList;

    return { templateData: tempObject, idsArray: copyOfIdsArray };
  }

  deleteEntryButtonHandler(
    event: MouseEvent,
    acceptedListIdTypes: string[],
    templateData: RecipeTemplateUserDataInterface,
    textAreaContainersIdsObject: KeyStringInterface
  ) {
    let targetElement = event.target as HTMLElement;
    let targetElementId = targetElement.id;
    let targetElementSplitId = targetElementId.split('-');
    const templateDataCopy = JSON.parse(JSON.stringify(templateData));
    let updatedIdsArray: string[] = [];

    for (
      let numberOfParentElements = 0;
      numberOfParentElements < 2;
      numberOfParentElements++
    ) {
      if (targetElementSplitId.includes('textarea')) {
        break;
      } else {
        targetElement = targetElement.parentElement as HTMLElement;
        targetElementId = targetElement.id;
        targetElementSplitId = targetElementId.split('-');
      }
    }

    if (targetElementSplitId.includes('textarea')) {
      const textAreaIndexNumber =
        +targetElementSplitId[targetElementSplitId.length - 1];

      let textAreaContainerIdType = '';

      for (
        let indexOfAcceptedListIdTypes = 0;
        indexOfAcceptedListIdTypes < acceptedListIdTypes.length;
        indexOfAcceptedListIdTypes++
      ) {
        if (
          targetElementSplitId.includes(
            acceptedListIdTypes[indexOfAcceptedListIdTypes]
          )
        ) {
          textAreaContainerIdType =
            acceptedListIdTypes[indexOfAcceptedListIdTypes];
          break;
        }
      }

      if (textAreaContainerIdType.length !== 0) {
        // Removing the text Area from the entered data array
        const copyOfTemplateDataIngredientsList = JSON.parse(
          JSON.stringify(templateDataCopy.ingredientsList)
        );

        copyOfTemplateDataIngredientsList.splice(textAreaIndexNumber, 1);

        // Updating the text area  data array
        templateDataCopy.ingredientsList = copyOfTemplateDataIngredientsList;

        // updating the id array with the new relevant ids

        const prefixIdString =
          textAreaContainersIdsObject[textAreaContainerIdType];

        for (
          let indexOfNewIds = 0;
          indexOfNewIds < copyOfTemplateDataIngredientsList.length;
          indexOfNewIds++
        ) {
          updatedIdsArray[indexOfNewIds] = prefixIdString + indexOfNewIds;
        }
      }
    }
    return { templateData: templateDataCopy, idsArray: updatedIdsArray };
  }

  textAreaResizeAllFunction() {
    const textAreas = document.getElementsByTagName('textarea');
    for (
      let indexOfTextArea = 0;
      indexOfTextArea < textAreas.length;
      indexOfTextArea++
    ) {
      this.textHeightSizer(textAreas[indexOfTextArea]);
      this.textAreaInputHandler(textAreas[indexOfTextArea]);
    }
  }
}
