import { databaseUrl } from 'src/app/constants/constants';

export class HomepageApiCallServiceFunctions {
  getAllRecipeData = async () => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/recipes/get-all-recipe-data`,
        {
          method: 'GET',
        }
      );
      console.log(fetchedResponse);
      return fetchedResponse;
    } catch (error) {
      console.log(error);
      return 'ERROR';
    }
  };

  addNewRecipe = async (recipeData: any) => {
    try {
      const fetchedResponse = await fetch(`${databaseUrl}/recipes/new-recipe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });
      console.log(fetchedResponse);
      return fetchedResponse;
    } catch (error) {
      console.log(error);
      return 'ERROR';
    }
  };
}
