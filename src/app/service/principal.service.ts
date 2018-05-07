import {Injectable, OnInit} from '@angular/core';
import {ErrorHandler} from './error-handler/error.handler';
import {Http} from '@angular/http';

@Injectable()
export class PrincipalService implements OnInit {
  private baseUrl = 'http://localhost:4200/api';

  private isUser;
  private isAdmin;

  ngOnInit(): void {
  }
  constructor(private http: Http, private errorHandler: ErrorHandler) {
  }

  getPrincipal(): Promise<any> {
    return this.http.get(`${this.baseUrl}/me`)
      .toPromise()
      .then(response => response.json() as Object)
      .then( principal => {
        console.log(principal);
      })
      .catch(this.errorHandler.handleResponse);
  }


  initUser(): any {
    return this.http.get(`${this.baseUrl}/roles`)
      .toPromise()
      .then(response => response.json() as String[])
      .then(roles => {
        this.setAccessFlags(roles);
      })
      .catch(this.errorHandler.handleResponse);
  }

  setAccessFlags(roles: String[]) {
    roles.forEach( role => {
      switch (role) {
        case 'ROLE_ADMIN':
          this.isAdmin = true;
          break;
        case 'ROLE_USER':
          this.isUser = true;
          break;
      }
    });
  }

  hasAdminRole(): boolean {
    return this.isAdmin;
  }

  hasUserRole(): boolean {
    return this.isAdmin;
  }

  invalidate(): void {
    this.isAdmin = false;
    this.isUser = false;
  }
}
