import { Injectable } from '@angular/core';
import { Place } from '../model/Place';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class PlaceService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: Http, private errorHandler: ErrorHandler) { }

  getPlaces(): Promise<Place[]> {
    return this.http.get(`${this.baseUrl}/admin/place/all`)
      .toPromise()
      .then(response => response.json() as Place[])
      .catch(this.errorHandler.handleResponse);
  }

  createPlace(newPlace: Place): Promise<Place> {
    return this.http.post(`${this.baseUrl}/admin/place/create`, newPlace)
      .toPromise().then(response => response.json() as Place)
      .catch(this.errorHandler.handleResponse);
  }

  updatePlace(updatedPlace: Place) {
    return this.http.put(`${this.baseUrl}/admin/place/update`, updatedPlace)
      .toPromise().then(response => response.json() as Place)
      .catch(this.errorHandler.handleResponse);
  }

  deletePlace(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/place/delete/${id}`)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }
}
