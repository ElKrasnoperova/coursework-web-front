import { Injectable } from '@angular/core';
import { Character } from '../model/Character';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class CharacterService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http, private errorHandler: ErrorHandler) { }

  getCharacters():  Promise<Character[]> {
    return this.http.get(`${this.baseUrl}/character/all`)
      .toPromise()
      .then(response => response.json() as Character[])
      .catch(this.errorHandler.handleResponse);
  }

  createCharacter(newCharacter: Character): Promise<Character> {
    return this.http.post(`${this.baseUrl}/admin/character/create`, newCharacter)
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.errorHandler.handleResponse);
  }

  updateCharacter(updatedCharacter: Character): Promise<Character> {
    return this.http.put(`${this.baseUrl}/admin/character/update`, updatedCharacter)
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.errorHandler.handleResponse);
  }

  deleteCharacter(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/character/delete/${id}`)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }
}
