import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {User} from '../model/User';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http, private errorHandler: ErrorHandler) { }

  getInfo(): Promise<string> {
    return this.http.get(`${this.baseUrl}/me`)
      .toPromise()
      .then(response => response.json() as string)
      .catch(this.errorHandler.handleResponse);
  }

  checkUsername(login: string): Promise<boolean> {
    return this.http.post(`${this.baseUrl}/signup/check/username`, login)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.errorHandler.handleResponse);
  }

  checkTelegram(telegram: string): Promise<boolean> {
    return this.http.post(`${this.baseUrl}/signup/check/telegram`, telegram)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.errorHandler.handleResponse);
  }

  checkEmail(email: string): Promise<boolean> {
    return this.http.post(`${this.baseUrl}/signup/check/email`, email)
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.errorHandler.handleResponse);
  }

  signin(username: string, password: string): Promise<any> {
    const requestParam = {
      username: username,
      password: password
    };
    console.log(requestParam);
    return this.http.post(`${this.baseUrl}/login`, requestParam)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }

  updateUser(updatedUser: User): Promise<User> {
    return this.http.put(`${this.baseUrl}/signup/check/email`, updatedUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.errorHandler.handleResponse);
  }
}
// const options = new RequestOptions({ withCredentials: true });
