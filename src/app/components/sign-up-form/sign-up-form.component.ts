import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PrincipalService} from '../../service/principal.service';
import {Router} from '@angular/router';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  hide = true;

  form: FormGroup;

  user: User;
  @Output() dataChanged: EventEmitter<User> = new EventEmitter<User>();

  usernameIsAvailable = true;
  telegramIsAvailable = true;
  emailIsAvailable    = true;

  contactsIsNotSpecified = true ;

  constructor(private userService:  UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.user = new User();
    this.form = this.formBuilder.group({
      name:     [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  checkUsername() {
    if (this.user.login) {
      this.userService.checkUsername(this.user.login)
        .then(result => {
          this.usernameIsAvailable = result;
        });
    }
  }

  checkTelegram() {
    if (this.user.telegram) {
      this.userService.checkTelegram(this.user.telegram)
        .then(result => {
          this.telegramIsAvailable = result;
        });
    }
  }

  checkEmail() {
    if (this.user.email) {
      this.userService.checkEmail(this.user.email)
        .then(result => {
          this.emailIsAvailable = result;
        });
    }
  }

  checkContacts() {
    this.contactsIsNotSpecified = this.user.email == null && this.user.telegram == null;
  }

  signup(): void {
    console.log(this.user);
    this.userService.signup(this.user)
      .then(newUser => {
        this.dataService.user = newUser;
        this.router.navigate(['/welcome']);
      });
  }
}

