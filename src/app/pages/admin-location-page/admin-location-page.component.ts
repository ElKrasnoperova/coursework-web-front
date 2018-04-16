import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-location-page',
  templateUrl: './admin-location-page.component.html',
  styleUrls: ['./admin-location-page.component.css']
})
export class AdminLocationPageComponent implements OnInit {
  seasons = [
    {number: '1', viewValue: 'Сезон 1'},
    {number: '2', viewValue: 'Сезон 2'},
    {number: '3', viewValue: 'Сезон 3'}
  ];

  episodes = [
    {number: '1', viewValue: 'Серия 1'},
    {number: '2', viewValue: 'Серия 2'},
    {number: '3', viewValue: 'Серия 3'}
  ];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
