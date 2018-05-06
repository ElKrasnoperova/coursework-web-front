import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Word} from '../model/Word';
import {Language} from '../model/Language';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class WordService {
  private baseUrl = 'http://localhost:9090/api';

  constructor(private http: Http, private errorHandler: ErrorHandler) { }

  getWords(language: Language ): Promise<Word[]> {
    return this.http.get(`${this.baseUrl}/admin/language/${language.id}/all`)
      .toPromise()
      .then(response => response.json() as Word[])
      .catch(this.errorHandler.handleResponse);
  }

  createWord(newWord: Word):  Promise<Word> {
    return this.http.post(`${this.baseUrl}/admin/language/word/create`, newWord)
      .toPromise()
      .then(response => response.json() as Word)
      .catch(this.errorHandler.handleResponse);
  }

  deleteWord(word: Word):  Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/language/word/delete/${word.id}`)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }

  updateWord(updatedWord: Word): Promise<Word> {
    return this.http.put(`${this.baseUrl}/admin/language/word/update`, updatedWord)
      .toPromise()
      .then(response => response.json() as Word)
      .catch(this.errorHandler.handleResponse);
  }
}
