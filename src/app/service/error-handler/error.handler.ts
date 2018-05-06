import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class ErrorHandler {

  constructor(private router: Router) {
  }
  handleResponse(error: any): Promise<any> {
    return Promise.reject(error);
  }
  handleError(error: any): void {
    console.log('error-handler');
    switch  (error.status) {
      case 400:
        alert(`Данные некорректны: \n\n ${error._body}`);
        break;
      case 500:
        this.router.navigate(['/500']);
        break;
      case 403:
        this.router.navigate(['/403']);
        break;
      case 404:
        this.router.navigate(['/404']);
    }
  }
}
