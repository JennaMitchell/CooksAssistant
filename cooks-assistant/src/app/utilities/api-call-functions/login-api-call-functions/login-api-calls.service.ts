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

      console.log(fetchedResponse);
      return fetchedResponse;
    } catch (err) {
      console.log(err);
      return 'ERROR';
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
      console.log(fetchedResponse);
      return fetchedResponse;
    } catch (error) {
      console.log(error);
      return 'ERROR';
    }
  };

  logoutCall = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };
}
