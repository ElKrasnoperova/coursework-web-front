// TODO Добавить картинки для слайдера
import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
import {PrincipalService} from '../../service/principal.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent  {

  public imageSources: IImage[] = [
    {url: '', href: '/login'}
  ];

  constructor( public  principalService: PrincipalService) { }

  // test() {
  //   // this.principalService.initUser();
  // }
  //
  // check(): boolean {
  //   return this.principalService.hasAdminRole();
  // }

}

