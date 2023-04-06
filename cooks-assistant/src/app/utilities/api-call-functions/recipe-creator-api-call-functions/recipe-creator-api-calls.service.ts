import { databaseUrl } from 'src/app/constants/constants';
import { ApiErrorService } from '../api-error-handler/api-error-handler.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class RecipeCreatorApiService {
  constructor(private apiErrorHandlerService: ApiErrorService) {}
  recipeCreatorCall = async (signupData: any, token: string) => {
    try {
      const fetchedResponse = await fetch(`${databaseUrl}/recipes/new-recipe`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(signupData),
      });

      const jsonedResponse = await fetchedResponse.json();

      this.apiErrorHandlerService.apiCallErrorHandler(
        fetchedResponse.status,
        jsonedResponse
      );

      if (fetchedResponse.status === 401 || fetchedResponse.status === 500) {
        throw new Error('Internal Error');
      }

      return fetchedResponse;
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };
}
