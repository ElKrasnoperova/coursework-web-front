import {Inject, Injectable, OnInit} from '@angular/core';
import {ErrorHandler} from './error-handler/error.handler';
import {Http} from '@angular/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class PrincipalService implements OnInit {
  private baseUrl = 'http://localhost:4200/api';

  private isUser;
  private isAdmin;

  ngOnInit(): void {
  }
  constructor(private http: Http,
              private errorHandler: ErrorHandler,
              @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
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
          this.storage.set('isAdmin', true);
          break;
        case 'ROLE_USER':
          this.storage.set('isUser', true);
          break;
      }
    });
  }

  hasAdminRole(): boolean {
    // return true;
    // console.log(this.storage.get('isAdmin'));
    return true;
    // return this.storage.get('isAdmin');
    // return this.storage.get('isAdmin') === 'true';
  }

  hasUserRole(): boolean {
    // return true;
    // console.log(this.storage.get('isUser'));
    // return this.storage.get('isUser');
    return true;
    // return this.storage.get('isUser') === 'true';
  }

  isNotUser(): boolean {
    // return false;
    return this.storage.get('isAdmin') || !this.storage.get('isUser') ;
    // return !( this.storage.get('isAdmin') || this.storage.get('isUser') );
    // return true;
    // console.log(localStorage.getItem('isAdmin'));
    // return !(localStorage.getItem('isAdmin') === 'true' || localStorage.getItem('isUser') === 'true');
  }

  invalidate(): void {
    this.storage.remove('isAdmin');
    this.storage.remove('isUser');
    // this.storage.remove('isAdmin');
    // this.storage.remove('isUser');
    // localStorage.removeItem('isAdmin');
    // localStorage.removeItem('isUser');
  }
}
