import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Episode} from '../../model/Episode';
import {Place} from '../../model/Place';
import {Character} from '../../model/Character';
import {EpisodeService} from '../../service/episode.service';
import {PlaceService} from '../../service/place.service';
import {CharacterService} from '../../service/character.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {AdminAddLocationDialogComponent} from './add-location-dialog';
import {AdminEditLocationDialogComponent} from './edit-location-dialog';
import {AdminDeleteLocationDialogComponent} from './delete-location-dialog';
import {AdminAddPlaceDialogComponent} from './add-place-dialog';


@Component({
  selector: 'app-admin-location-page',
  templateUrl: './admin-location-page.component.html',
  styleUrls: ['./admin-location-page.component.css']
})
export class AdminLocationPageComponent implements OnInit {

  episodes:               Episode[];
  places:                 Place[];
  characters:             Character[];

  placesNames:            string[];

  seasonsCount:           number;
  selectedSeasonNumber:   number;
  selectedEpisodeNumber:  number;

  displayedColumns = ['id', 'name', 'select'];
  displayedColumnsForLastStep = ['id', 'name', 'x', 'y', 'select'];
  dataSource: MatTableDataSource<Place>;
  selection = new SelectionModel<Place>(false, []);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  disableSelect = true;

  constructor(public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private episodeService: EpisodeService,
              private placeService: PlaceService,
              private characterService: CharacterService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.getAllSeasons();

    this.getPlacesNames();
    this.dataSource = new MatTableDataSource<Place>(this.places);

  }

  getAllSeasons(): void {
    this.episodeService.getSeasons()
      .then( items => {
        this.episodes = items;
      });
  }
  getSeason(): void {
  }

  getPlacesNames(): void {
    this.placeService.getPlacesNames()
      .then(names => {
        this.placesNames = names;
      });
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
      .open(AdminAddPlaceDialogComponent, {
        height: '45%', width: '35%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  opedDialogEditPlace() {
    this.dialog
      .open(AdminEditLocationDialogComponent, {
        height: '45%', width: '35%'
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

  openDialogAddLocation() {
    this.dialog
      .open(AdminAddLocationDialogComponent, {
        height: '45%', width: '31%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  opedDialogEditLocation() {
    this.dialog
      .open(AdminEditLocationDialogComponent, {
        height: '45%', width: '31%'
      })
      .afterClosed().subscribe(result => {
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

  enableEpisodeSelect() {
    this.disableSelect = false;
  }
}

