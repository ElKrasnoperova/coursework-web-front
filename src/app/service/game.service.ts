import {Injectable} from '@angular/core';
import {Language} from '../model/Language';
import {Http} from '@angular/http';
import {Word} from '../model/Word';
import {log} from 'util';

@Injectable()
export class GameService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getWords(id: number): Promise<Word[]> {
    return this.http.get(`${this.baseUrl}/game/language/${id}/start`)
      .toPromise()
      .then(response => response.json() as Word[])
      .catch(this.handleError);
  }

  getResult(words: Word[]): Promise<Boolean[]> {
    return this.http.post(`${this.baseUrl}/game/check`, words)
      .toPromise()
      .then(response => response.json() as Boolean[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
