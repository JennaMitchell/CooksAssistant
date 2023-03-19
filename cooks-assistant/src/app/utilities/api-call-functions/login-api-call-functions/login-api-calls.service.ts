import { databaseUrl } from 'src/app/constants/constants';
export class LoginApiCallsService {
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
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };

  loginCall = async (loginData: any) => {
    try {
      const fetchedResponse = await fetch(`${databaseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'applicaiton/json',
        },
        body: JSON.stringify(loginData),
      });

      return fetchedResponse;
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      throw new Error(`${message}`);
    }
  };

  logoutCall = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };
}
