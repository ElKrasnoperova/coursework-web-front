import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {User} from '../model/User';
import {ErrorHandler} from './error-handler/error.handler';
import {HttpHeaders} from '@angular/common/http';
import {PrincipalService} from './principal.service';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http,
              private router: Router,
              private errorHandler: ErrorHandler,
              private principalService: PrincipalService,
              private dataService: DataService){ }

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

  signin(user: User): Promise<any> {
    const header  = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({ withCredentials: true, headers: header });
    const body    = `username=${user.login}&password=${user.password}`;
    return this.http.post(`${this.baseUrl}/login`, body, options)
      .toPromise()
      .then(() => this.principalService.initUser())
      .then(() => this.router.navigate(['/home']))
      .catch(this.errorHandler.handleResponse);
  }

  signup(user: User): Promise<any> {
    return this.http.post(`${this.baseUrl}/signup`, user)
      .toPromise()
      // .then(response => response.json() as User)
      // .then(newUser => {
      //   this.dataService.user = new User();
      //   this.router.navigate(['/welcome']);
      // })
      .catch(this.errorHandler.handleResponse);
  }

  logout(): Promise<any> {
    const header  = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({ withCredentials: true, headers: header });
    return this.http.post(`${this.baseUrl}/logout`, options)
      .toPromise()
      .then(() => this.principalService.invalidate())
      .then(() => this.router.navigate(['/login']))
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
