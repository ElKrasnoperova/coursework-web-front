
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: 'sign-in-form.component.html',
  styleUrls: ['sign-in-form.component.css'],
})

export class SignInFormComponent implements OnInit {
  hide = true;

  form: FormGroup;

  user: User;
  @Output() dataChanged: EventEmitter<User> = new EventEmitter<User>();

  constructor(private  userService: UserService,
              private  errorHandler: ErrorHandler,
              private  formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = new User();
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  signin() {
    console.log(this.user);
    this.userService.signin(this.user)
      .catch( err => this.errorHandler.handleError(err));
  }
}
