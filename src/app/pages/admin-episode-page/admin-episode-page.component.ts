import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Episode} from '../../model/Episode';
import {MatDialog} from '@angular/material';
import {AdminAddEpisodeDialogComponent} from './add-episode-dialog';
import {AdminAddSeasonDialogComponent} from './add-season-dialog';

@Component({
  selector: 'app-admin-episode-page',
  templateUrl: './admin-episode-page.component.html',
  styleUrls: ['./admin-episode-page.component.css']
})
export class AdminEpisodePageComponent implements OnInit {

  episodes:               Episode[];

  selectedSeasonNumber:   number;
  selectedEpisodeNumber:  number;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(  public dialog: MatDialog,
                private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  setSelectedSeasonNumber(n: number): void {
    this.selectedSeasonNumber = n;
  }

  setSelectedEpisodeNumber(n: number) {
    this.selectedEpisodeNumber = n;
  }

  openDialogAddSeason() {
    this.dialog
      .open(AdminAddSeasonDialogComponent, {
        height: '40%', width: '31%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  openDialogAddEpisode() {
    this.dialog
      .open(AdminAddEpisodeDialogComponent, {
        height: '40%', width: '31%'
      })
      .afterClosed().subscribe(result => {
    });
  }
}
