import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Episode} from '../../model/Episode';
import {EpisodeService} from '../../service/episode.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {AdminAddLocationDialogComponent} from './add-location-dialog';
import {AdminEditLocationDialogComponent} from './edit-location-dialog';
import {AdminDeleteLocationDialogComponent} from './delete-location-dialog';

@Component({
  selector: 'app-admin-location-page',
  templateUrl: './admin-location-page.component.html',
  styleUrls: ['./admin-location-page.component.css']
})
export class AdminLocationPageComponent implements OnInit {

  episodes:               Episode[];
  seasonsCount:           number;
  selectedSeasonNumber:   number;
  selectedEpisodeNumber:  number;

  displayedColumns = ['id', 'name', 'select'];
  dataSource = new MatTableDataSource<Location>(LOCATION_DATA);
  selection = new SelectionModel<Location>(false, []);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private episodeService: EpisodeService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getAllSeasons();
    this.getSeasonsCount();
  }

  getAllSeasons(): void {
    this.episodeService.getSeasons()
      .then( items => {
        this.episodes = items;
      });
  }

  getSeasonsCount(): void {
    this.episodeService.getSeasonsCount()
      .then(count => {
        this.seasonsCount = count;
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getCharactersForEpisode(): void {
  }

  setSelectedSeasonNumber(n: number): void {
    this.selectedSeasonNumber = n;
  }

  setSelectedEpisodeNumber(n: number) {
    this.selectedEpisodeNumber = n;
  }

  openDialogAddPlace() {
    this.dialog
      .open(AdminAddLocationDialogComponent, {
        height: '45%', width: '35%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  opedDialogEditPlace() {
    this.dialog
      .open(AdminEditLocationDialogComponent, {
        height: '55%', width: '35%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  openDialogDeletePlace() {
    this.dialog
      .open(AdminDeleteLocationDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
    });
  }
}

export interface Location {
  name: string;
  id: number;
}

const LOCATION_DATA: Location[] = [
  {id: 1, name: 'Винтерфелл'},
  {id: 2, name: 'Королевская гавань'},
  {id: 3, name: 'Дорн'},
];
