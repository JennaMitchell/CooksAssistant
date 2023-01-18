export class RecipeTagFilter {
  recipeTagFilter = (tagsArray: string[]) => {
    const finalTagPictureArray = [];

    for (let indexOfTag = 0; indexOfTag < tagsArray.length; indexOfTag++) {
      switch (tagsArray[indexOfTag]) {
        case 'Meat':
          finalTagPictureArray.push('assets/images/recipe-icons/meat.png');
          break;
        case 'Veggies':
          finalTagPictureArray.push('assets/images/recipe-icons/leaf.png');
          break;
        case 'Spicy':
          finalTagPictureArray.push(
            'assets/images/recipe-icons/red-chili-pepper.png'
          );
          break;
        case 'Gluten':
          finalTagPictureArray.push('assets/images/recipe-icons/wheat.png');
          break;
        case 'Dinner':
          finalTagPictureArray.push('assets/images/recipe-icons/dinner.png');
          break;
        case 'Lunch':
          finalTagPictureArray.push('assets/images/recipe-icons/lunch.png');
          break;
        case 'Breakfast':
          finalTagPictureArray.push('assets/images/recipe-icons/breakfast.png');
          break;
        case 'Sweet':
          finalTagPictureArray.push('assets/images/recipe-icons/sweet.png');
          break;
        default:
          break;
      }
    }
    return finalTagPictureArray;
  };
}
