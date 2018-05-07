import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  hide = true;

  user: User;
  @Output() dataChanged: EventEmitter<User> = new EventEmitter<User>();

  isUsernameAvailable = true;
  isTelegramAvailable = true;
  isEmailAvailable    = true;

  username = new FormControl('', [
    Validators.required
  ]);

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  checkUsername() {
    if (this.user.login) {
      this.userService.checkUsername(this.user.login)
        .then(result => {
          this.isUsernameAvailable = result;
        });
    }
  }

  checkTelegram() {
    if (this.user.telegram) {
      this.userService.checkTelegram(this.user.telegram)
        .then(result => {
          this.isTelegramAvailable = result;
        });
    }
  }

  checkEmail() {
    if (this.user.email) {
      this.userService.checkEmail(this.user.email)
        .then(result => {
          this.isEmailAvailable = result;
        });
    }
  }

  passData(): void {
    this.dataChanged.emit(this.user);
  }
}

