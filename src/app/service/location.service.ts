import {Episode} from '../model/Episode';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Location} from '../model/Location';
import {Place} from '../model/Place';
import {Character} from '../model/Character';

@Injectable()
export class LocationService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  createLoation(newLocation: Location): Promise<Location> {
    return this.http.post(`${this.baseUrl}/admin/location/create`, newLocation)
      .toPromise().then(response => response.json() as Location)
      .catch(this.handleError);
  }

  updateLocation(updatedLocation: Location) {
    return this.http.put(`${this.baseUrl}/admin/location/update`, updatedLocation)
      .toPromise().then(response => response.json() as Location)
      .catch(this.handleError);
  }

  deleteLocation(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/location/delete/${id}`)
      .toPromise()
      .catch(this.handleError);
  }

  getLocations(episode: Episode, place: Place): Promise<Location[]> {
    const location = new Location();
    location.place = place;
    location.episode = episode;
    return this.http.post(`${this.baseUrl}/admin/location/all`, location)
      .toPromise()
      .then(response => response.json() as Location[])
      .catch(this.handleError);
  }

  getCharactersForEpisode(episode: Episode): Promise<Character[]> {
    return this.http.post(`${this.baseUrl}/admin/character/episode`, episode)
      .toPromise()
      .then(response => response.json() as Character[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
