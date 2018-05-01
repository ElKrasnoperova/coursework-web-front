import { Injectable } from '@angular/core';
import { Place } from '../model/Place';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlaceService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  getPlaces(): Promise<Place[]> {
    return this.http.get(`${this.baseUrl}/admin/place/all`)
      .toPromise()
      .then(response => response.json() as Place[])
      .catch(this.handleError);
  }

  createPlace(newPlace: Place): Promise<Place> {
    return this.http.post(`${this.baseUrl}/admin/place/create`, newPlace)
      .toPromise().then(response => response.json() as Place)
      .catch(this.handleError);
  }

  updatePlace(updatedPlace: Place) {
    return this.http.put(`${this.baseUrl}/admin/place/update`, updatedPlace)
      .toPromise().then(response => response.json() as Place)
      .catch(this.handleError);
  }

  deletePlace(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/place/delete/${id}`)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
