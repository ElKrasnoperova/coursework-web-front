import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Language} from '../model/Language';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class LanguageService {
  private baseUrl = 'http://localhost:9090/api';

  constructor(private http: Http,
              private errorHandler: ErrorHandler) { }

  getLanguage(languageName: string): Promise<Language> {
    return this.http.post(`${this.baseUrl}/language`, languageName)
      .toPromise()
      .then( response => response.json() as Language)
      .catch(this.errorHandler.handleResponse);
  }

  getLanguages(): Promise<Language[]> {
    return this.http.get(`${this.baseUrl}/language/all`)
      .toPromise()
      .then(response => response.json() as Language[])
      .catch(this.errorHandler.handleResponse);
  }

  createLanguage(newLanguage: Language):  Promise<Language> {
    return this.http.post(`${this.baseUrl}/admin/language/create`, newLanguage)
      .toPromise()
      .then(response => response.json() as Language)
      .catch(this.errorHandler.handleResponse);
  }

  deleteLanguage(id: number):  Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/language/delete/${id}`)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }

  updateLanguage(updatedLanguage: Language): Promise<Language> {
    return this.http.put(`${this.baseUrl}/admin/language/update`, updatedLanguage)
      .toPromise()
      .then(response => response.json() as Language)
      .catch(this.errorHandler.handleResponse);
  }
}
