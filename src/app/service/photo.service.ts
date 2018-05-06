import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Photo} from '../model/Photo';
import {ErrorHandler} from './error-handler/error.handler';

@Injectable()
export class PhotoService {
  private baseUrl = 'http://localhost:4200/api';
  private files = '../../../assets/img/';

  constructor(private http: Http,
              private errorHandler: ErrorHandler) { }

  getPhotos():  Promise<Photo[]> {
    return this.http.get(`${this.baseUrl}/admin/photo/all`)
      .toPromise()
      .then(response => response.json() as Photo[])
      .catch(this.errorHandler.handleResponse);
  }

  createPhoto(newPhoto: Photo): Promise<Photo> {
    return this.http.post(`${this.baseUrl}/admin/photo/create`, newPhoto)
      .toPromise().then(response => response.json() as Photo)
      .catch(this.errorHandler.handleResponse);
  }

  deletePhoto(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/admin/photo/delete/${id}`)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }

  getPhoto(title: string): Promise<Photo> {
    return this.http.post(`${this.baseUrl}/photo`, this.files + title)
      .toPromise()
      .catch(this.errorHandler.handleResponse);
  }
}
