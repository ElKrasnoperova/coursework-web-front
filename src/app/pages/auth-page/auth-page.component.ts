// TODO Добавить картинки для слайдера
import {Component, Inject, OnInit} from '@angular/core';
import {IImage} from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
import {PrincipalService} from '../../service/principal.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent  {

  public imageSources: IImage[] = [
    {url: '', href: '/login'}
  ];

  constructor() { }

}

