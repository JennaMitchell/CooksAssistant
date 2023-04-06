import { Injectable } from '@angular/core';
import { databaseUrl } from 'src/app/constants/constants';
import { ApiErrorService } from '../api-error-handler/api-error-handler.service';

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
  ratings: number[];
  numberOfMakes: number;
}

export interface RecipeTemplateSavedDataInterfaceWithId {
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
  ratings: number[];
  numberOfMakes: number;
  _id: string;
}

export interface GetRecipeDataSuccessfulResponseInterface {
  message: string;
  retrievedData: RecipeTemplateSavedDataInterfaceWithId[];
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeDataApiCalls {
  constructor(private apiErrorService: ApiErrorService) {}
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
  getRecipeDataById = async (id: string) => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/recipes/get-recipe-by-id/${id}`,
        {
          method: 'GET',
        }
      );

      const awaitedResponse = await fetchedResponse.json();
      this.apiErrorService.apiCallErrorHandler(
        fetchedResponse.status,
        awaitedResponse
      );

      return awaitedResponse as GetRecipeDataSuccessfulResponseInterface;
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };
  getRecipeDataByTitle = async (title: string) => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/recipes/get-recipe-by-title/${title}`,
        {
          method: 'GET',
        }
      );

      const awaitedResponse = await fetchedResponse.json();
      this.apiErrorService.apiCallErrorHandler(
        fetchedResponse.status,
        awaitedResponse
      );

      return awaitedResponse as GetRecipeDataSuccessfulResponseInterface;
    } catch (err) {
      let message;

      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };
  getRecipeDataByRating = async (greaterValue: number, lessValue: number) => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/recipes/get-recipe-by-rating/greaterValue=${greaterValue}&&lessThan=${lessValue}`,
        {
          method: 'GET',
        }
      );

      const awaitedResponse = await fetchedResponse.json();
      this.apiErrorService.apiCallErrorHandler(
        fetchedResponse.status,
        awaitedResponse
      );

      return awaitedResponse as GetRecipeDataSuccessfulResponseInterface;
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };
}
