
import {Component, Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NgForm, Validator, ValidatorFn,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {User} from '../../model/User';
import {Episode} from '../../model/Episode';
import {UserService} from '../../service/user.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-sign-in-form',
  templateUrl: 'sign-in-form.component.html',
  styleUrls: ['sign-in-form.component.css'],
})

export class SignInFormComponent implements OnInit {
  hide = true;

  user: User;
  @Output() dataChanged: EventEmitter<User> = new EventEmitter<User>();

  usernameControl = new FormControl('', [
    Validators.required
  ]);
  passwordControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private  userService: UserService, private errorHandler: ErrorHandler){ }

  ngOnInit(): void {
    this.user = new User();
  }

  signin() {
    this.userService.signin(this.user)
      .catch( err => this.errorHandler.handleError(err));
  }

  passData(): void {
    this.dataChanged.emit(this.user);
  }
}
