import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class AdminService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http,
              private errorHandler: ErrorHandler ) { }

  getUsers():  Promise<User[]> {
    return this.http.get(`${this.baseUrl}/admin/user/all`)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.errorHandler.handleResponse);
  }

  addAdmin(newAdmin: string): Promise<User> {
      return this.http.get(`${this.baseUrl}/admin/user/admin/${newAdmin}`)
        .toPromise()
        .then(response => response.json() as User)
        .catch(this.errorHandler.handleResponse);
  }

  removeAdmin(failure: string): Promise<User> {
    return this.http.get(`${this.baseUrl}/admin/user/noadmin/${failure}`)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.errorHandler.handleResponse);
  }
}
