import { databaseUrl } from 'src/app/constants/constants';
export class RecipeCreatorApiService {
  recipeCreatorCall = async (signupData: any) => {
    try {
      const fetchedResponse = await fetch(
        `${databaseUrl}/auth/recipe-creator/new`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify(signupData),
        }
      );

      console.log(fetchedResponse);
      return fetchedResponse;
    } catch (err) {
      console.log(err);
      return 'ERROR';
    }
  };
}
