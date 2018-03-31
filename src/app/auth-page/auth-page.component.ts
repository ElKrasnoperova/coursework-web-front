// TODO Добавить картинки для слайдера
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {


  public imageSources: string[] = [
    '',
    ''
  ];

  ngOnInit() {
  }

}

