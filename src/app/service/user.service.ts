import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getInfo(): Promise<string> {
    return this.http.get(`${this.baseUrl}/me`)
      .toPromise()
      .then(response => response.json() as string)
      .catch(this.handleError);
  }

  checkUsername(): Promise<boolean> {
    return this.http.get(`${this.baseUrl}/signup/check/username`)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  checkTelegram(): Promise<boolean> {
    return this.http.get(`${this.baseUrl}/signup/check/telegram`)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  checkEmail(): Promise<boolean> {
    return this.http.get(`${this.baseUrl}/signup/check/email`)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Some ERROR occured', error);
    return Promise.reject(error.message || error);
  }
}
