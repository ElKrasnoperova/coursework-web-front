
import {Component, Directive, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroupDirective, NG_VALIDATORS, NgForm, Validator, ValidatorFn, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {User} from '../../model/User';
import {Episode} from '../../model/Episode';

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

export class SignInFormComponent {
  hide = true;

  user = new User();
  @Output() dataChanged: EventEmitter<User> = new EventEmitter<User>();

  usernameControl = new FormControl('', [
    Validators.required
  ]);
  passwordControl = new FormControl('', [
    Validators.required
  ]);

  passData(): void {
    this.dataChanged.emit(this.user);
  }
}
