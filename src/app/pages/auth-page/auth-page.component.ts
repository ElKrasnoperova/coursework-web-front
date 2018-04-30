// TODO Добавить картинки для слайдера
import { Component, OnInit } from '@angular/core';
import {IImage} from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  public imageSources: IImage[] = [
    {url: '', href: '/login'}
  ];

  user: User;

  ngOnInit() {
    this.user = new User();
  }

  constructor(private  userService: UserService) {}

  signin() {
    this.userService.signin(this.user.login, this.user.password);
  }

  signup() {
  }

  acceptUserData(user: User) {
    this.user = user;
    console.log(this.user);
  }
}

