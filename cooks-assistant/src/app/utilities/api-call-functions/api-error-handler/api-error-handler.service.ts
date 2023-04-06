import { Injectable } from '@angular/core';
interface ResponseObjectInterface {
  message: string;
  error: { error: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiErrorService {
  apiCallErrorHandler = async (status: number, responseObject: any) => {
    if (status === 401 || status === 500) {
      throw new Error(
        `${responseObject.message} ${responseObject.error[0].error}`
      );
    }
  };
}
