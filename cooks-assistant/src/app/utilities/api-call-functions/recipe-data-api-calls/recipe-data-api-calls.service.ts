import { databaseUrl } from 'src/app/constants/constants';

export interface RecipeTemplateSavedDataInterface {
  title: string;
  quote: string;
  servings: string;
  prepTime: string;
  cookingTime: string;
  ingredientsList: string[];
  directionsList: string[];
  notes: string[];
  description: string;
  selectedRecipeDishImageIndex: number;
  username: string;
  selectedTemplateIndex: number;
  tags: string[];
  rating: number;
  numberOfMakes: number;
}

export interface GetRecipeDataSuccessfulResponseInterface {
  message: string;
  retrievedData: RecipeTemplateSavedDataInterface[];
  status: number;
}

export class RecipeDataApiCalls {
  getAllRecipeData = async () => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/recipes/get-all-recipe-data`,
        {
          method: 'GET',
        }
      );

      return await fetchedResponse.json();
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };

  getRecipeDataWithFilter = async (filterText: string) => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/recipes/get-filtered-recipe-data/${filterText}`,
        {
          method: 'GET',
        }
      );

      return (await fetchedResponse.json()) as GetRecipeDataSuccessfulResponseInterface;
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };
}
