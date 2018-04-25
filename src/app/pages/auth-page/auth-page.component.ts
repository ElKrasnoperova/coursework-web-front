// TODO Добавить картинки для слайдера
import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  public imageSources: IImage[] = [
    {url: '', href: '/login'}
  ];

  ngOnInit() {
  }

  constructor() {}
}

