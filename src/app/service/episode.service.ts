import { Injectable } from '@angular/core';
import { Episode } from '../model/Episode';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Language} from '../model/Language';

@Injectable()
export class EpisodeService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) {
  }

  getSeasons(): Promise<Episode[]> {
    return this.http.get(`${this.baseUrl}/episode/all`)
      .toPromise()
      .then(response => response.json() as Episode[])
      .catch(this.handleError);
  }

  getEpisodesForSeasons(seasonNumber: number): Promise<Episode[]> {
    return this.http.get(`${this.baseUrl}/episode/season/${seasonNumber}/all`)
      .toPromise()
      .then(response => response.json() as Episode[])
      .catch(this.handleError);
  }

  deleteEpisode(id: number):  Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/episode/delete/${id}`)
      .toPromise()
      .catch(this.handleError);
  }

  createEpisode(newEpisode: Episode): Promise<Episode> {
    return this.http.post(`${this.baseUrl}/admin/episode/create`, newEpisode)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.handleError);
  }

  createSeason(newSeason: Episode): Promise<Episode> {
    return this.http.post(`${this.baseUrl}/admin/episode/season/create`, newSeason)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.handleError);
  }

  updateEpisode(updatedEpisode: Episode): Promise<Episode> {
    return this.http.put(`${this.baseUrl}/admin/episode/update`, updatedEpisode)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.handleError);
  }

  updateSeason(updatedSeason: Episode): Promise<Episode> {
    return this.http.put(`${this.baseUrl}/admin/episode/season/update`, updatedSeason)
      .toPromise()
      .then(response => response.json() as Episode)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
