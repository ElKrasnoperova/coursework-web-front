import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-game-page',
  templateUrl: './admin-game-page.component.html',
  styleUrls: ['./admin-game-page.component.css']
})
export class AdminGamePageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  languages = ['Дотракийский', 'Валирийский'];
  disabledList = false;
  readonlyInput = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onFocusInput() {
    this.disabledList = true;
  }
  onUnfocus() {
    this.readonlyInput = false;
    this.disabledList = false;
  }
  onFocusList() {
    this.readonlyInput = true;
  }
}
