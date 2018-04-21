import { Injectable } from '@angular/core';
import { Character } from '../model/Character';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getCharacters():  Promise<Character[]> {
    return this.http.get(this.baseUrl + '/character/all')
      .toPromise()
      .then(response => response.json() as Character[])
      .catch(this.handleError);
  }

  createCharacter(newCharacter: Character): Promise<Character> {
    return this.http.post(this.baseUrl + '/admin/character/create', newCharacter)
      .toPromise().then(response => response.json() as Character)
      .catch(this.handleError);
  }

  updateCharacter(updatedCharacter: Character): Promise<Character> {
    return this.http.put(this.baseUrl + '/admin/character/update', updatedCharacter)
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.handleError);
  }

  deleteCharacter(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/admin/character/delete' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
