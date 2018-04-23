import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getUsers():  Promise<User[]> {
    return this.http.get(`${this.baseUrl}/admin/user/all`)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  addAdmin(newAdmin: string): Promise<User> {
      return this.http.get(`${this.baseUrl}/admin/user/admin/${newAdmin}`)
        .toPromise()
        .then(response => response.json() as User)
        .catch(this.handleError);
  }

  removeAdmin(failure: string): Promise<User> {
    return this.http.get(`${this.baseUrl}/admin/user/noadmin/${failure}`)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
