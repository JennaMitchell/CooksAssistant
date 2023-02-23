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

      return fetchedResponse;
    } catch (err) {
      console.log(err);
      return 'ERROR';
    }
  };
}
