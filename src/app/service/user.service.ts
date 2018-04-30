import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';

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

  checkUsername(login: string): Promise<boolean> {
    return this.http.post(`${this.baseUrl}/signup/check/username`, login)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  checkTelegram(telegram: string): Promise<boolean> {
    return this.http.post(`${this.baseUrl}/signup/check/telegram`, telegram)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  checkEmail(email: string): Promise<boolean> {
    return this.http.post(`${this.baseUrl}/signup/check/email`, email)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  signin(username: string, password: string): Promise<any> {
    const requestParam = {
      username: username,
      password: password
    };
    console.log(requestParam);
    return this.http.post(`${this.baseUrl}/login`, requestParam)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some ERROR occured', error);
    return Promise.reject(error.message || error);
  }
}
// const options = new RequestOptions({ withCredentials: true });
