export class RecipeTagFilter {
  recipeTagFilter = (tagsArray: string[]) => {
    const finalTagPictureArray = [];

    for (let indexOfTag = 0; indexOfTag < tagsArray.length; indexOfTag++) {
      switch (tagsArray[indexOfTag]) {
        case 'Meat':
          finalTagPictureArray.push('assets/images/icons/food/beef-icon.png');
          break;
        case 'Veggies':
          finalTagPictureArray.push(
            'assets/images/icons/food/vegetarian-icon.png'
          );
          break;
        case 'Spicy':
          finalTagPictureArray.push('assets/images/icons/food/spicy-icon.png');
          break;
        case 'Gluten':
          finalTagPictureArray.push('assets/images/icons/food/grain-icon.png');
          break;
        case 'Dinner':
          finalTagPictureArray.push(
            'assets/images/icons/meal-times/dinner.png'
          );
          break;
        case 'Lunch':
          finalTagPictureArray.push('assets/images/icons/meal-times/lunch.png');
          break;
        case 'Breakfast':
          finalTagPictureArray.push(
            'assets/images/icons/meal-times/breakfast.png'
          );
          break;
        case 'Sweet':
          finalTagPictureArray.push('assets/images/icons/food/sweet-icon.png');
          break;
        default:
          break;
      }
    }
    return finalTagPictureArray;
  };
}
