import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Language} from '../model/Language';

@Injectable()
export class LanguageService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getLanguage(languageName: string): Promise<Language> {
    return this.http.post(`${this.baseUrl}/language`, languageName)
      .toPromise()
      .then( response => response.json() as Language)
      .catch(this.handleError);
  }

  getLanguages(): Promise<Language[]> {
    return this.http.get(`${this.baseUrl}/language/all`)
      .toPromise()
      .then(response => response.json() as Language[])
      .catch(this.handleError);
  }

  createLanguage(newLanguage: Language):  Promise<Language> {
    return this.http.post(`${this.baseUrl}/admin/language/create`, newLanguage)
      .toPromise()
      .then(response => response.json() as Language)
      .catch(this.handleError);
  }

  deleteLanguage(id: number):  Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/language/delete/${id}`)
      .toPromise()
      .catch(this.handleError);
  }

  updateLanguage(updatedLanguage: Language): Promise<Language> {
    return this.http.put(`${this.baseUrl}/admin/language/update`, updatedLanguage)
      .toPromise()
      .then(response => response.json() as Language)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
