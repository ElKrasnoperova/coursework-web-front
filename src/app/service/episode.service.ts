import { Injectable } from '@angular/core';
import { Episode } from '../model/Episode';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class EpisodeService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http, private errorHandler: ErrorHandler) {
  }

  getSeasons(): Promise<Episode[]> {
    return this.http.get(`${this.baseUrl}/episode/all`)
      .toPromise()
      .then(response => response.json() as Episode[])
      .catch(this.errorHandler.handleResponse);
  }

  getEpisodesForSeasons(seasonNumber: number): Promise<Episode[]> {
    return this.http.get(`${this.baseUrl}/episode/season/${seasonNumber}/all`)
      .toPromise()
      .then(response => response.json() as Episode[])
      .catch(this.errorHandler.handleResponse);
  }

  deleteEpisode(id: number):  Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/episode/delete/${id}`)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }

  createEpisode(newEpisode: Episode): Promise<Episode> {
    return this.http.post(`${this.baseUrl}/admin/episode/create`, newEpisode)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.errorHandler.handleResponse);
  }

  createSeason(newSeason: Episode): Promise<Episode> {
    return this.http.post(`${this.baseUrl}/admin/episode/season/create`, newSeason)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.errorHandler.handleResponse);
  }

  updateEpisode(updatedEpisode: Episode): Promise<Episode> {
    return this.http.put(`${this.baseUrl}/admin/episode/update`, updatedEpisode)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.errorHandler.handleResponse);
  }

  updateSeason(updatedSeason: Episode): Promise<Episode> {
    return this.http.put(`${this.baseUrl}/admin/episode/season/update`, updatedSeason)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.errorHandler.handleResponse);
  }
}
