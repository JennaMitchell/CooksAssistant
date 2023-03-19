import { databaseUrl } from 'src/app/constants/constants';
export class SignupApiCallsService {
  signupCall = async (signupData: any) => {
    try {
      const fetchedResponse = await fetch(`${databaseUrl}/auth/signup`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(signupData),
      });

      return { response: fetchedResponse, error: '' };
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };
}
