import { Injectable } from '@angular/core';
import { Episode } from '../model/Episode';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Character} from '../model/Character';

@Injectable()
export class EpisodeService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) {
  }

  getSeasons():  Promise<Episode[]> {
    return this.http.get(`${this.baseUrl}/season/all`)
      .toPromise()
      .then(response => response.json() as Episode[])
      .catch(this.handleError);
  }

  getSeasonsCount():  Promise<number> {
    return this.http.get(`${this.baseUrl}/season/count`)
      .toPromise()
      .then(response => response.json() as number)
      .catch(this.handleError);
  }

  getCharactersForEpisode(seasonNumber: number, episodeNumber: number): Promise<Character[]> {
    return this.http.get(`${this.baseUrl}/${seasonNumber}/${episodeNumber}`)
      .toPromise()
      .then(response => response.json() as Character[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
