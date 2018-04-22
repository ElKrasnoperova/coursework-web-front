import { Injectable } from '@angular/core';
import { Place } from '../model/Place';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlaceService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getPlaces(): Promise<Place[]> {
    return this.http.get(`${this.baseUrl}/place/all`)
      .toPromise()
      .then(response => response.json() as Place[])
      .catch(this.handleError);
  }

  createPlace(newPlace: Place): Promise<Place> {
    return this.http.post(`${this.baseUrl}/admin/place/create`, newPlace)
      .toPromise().then(response => response.json() as Place)
      .catch(this.handleError);
  }

  getPlace(id: number) {
    return this.http.get(`${this.baseUrl}/admin/place/${id}`)
      .toPromise()
      .then(response => response.json() as Place)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
