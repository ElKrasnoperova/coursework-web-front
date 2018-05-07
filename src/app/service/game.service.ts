import {Injectable} from '@angular/core';
import {Language} from '../model/Language';
import {Http} from '@angular/http';
import {Word} from '../model/Word';
import {log} from 'util';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class GameService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http,
              private errorHandler: ErrorHandler) { }

  getWords(id: number): Promise<Word[]> {
    return this.http.get(`${this.baseUrl}/game/language/${id}/start`)
      .toPromise()
      .then(response => response.json() as Word[])
      .catch(this.errorHandler.handleResponse);
  }

  getResult(words: Word[]): Promise<boolean[]> {
    return this.http.post(`${this.baseUrl}/game/check`, words)
      .toPromise()
      .then(response => response.json() as boolean[])
      .catch(this.errorHandler.handleResponse);
  }
}
