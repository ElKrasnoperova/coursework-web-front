import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Episode} from '../../model/Episode';
import {Place} from '../../model/Place';
import {Character} from '../../model/Character';
import {Location} from '../../model/Location';
import {EpisodeService} from '../../service/episode.service';
import {PlaceService} from '../../service/place.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {AdminAddLocationDialogComponent} from './add-location-dialog';
import {AdminEditLocationDialogComponent} from './edit-location-dialog';
import {AdminAddPlaceDialogComponent} from './add-place-dialog';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';
import {AdminEditPlaceDialogComponent} from './edit-place-dialog';
import {LocationService} from '../../service/location.service';


@Component({
  selector: 'app-admin-location-page',
  templateUrl: './admin-location-page.component.html',
  styleUrls: ['./admin-location-page.component.css']
})
export class AdminLocationPageComponent implements OnInit {

  places:                 Place[];
  characters:             Character[];
  locations: Location[];

  location: Location;

  displayedColumns_places = ['id', 'name', 'select'];
  dataSource_places: MatTableDataSource<Place>;
  selection_places = new SelectionModel<Place>(false, []);

  displayedColumns_locations = ['id', 'name', 'x', 'y', 'select'];
  dataSource_locations: MatTableDataSource<Location>;
  selection_locations = new SelectionModel<Location>(false, []);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private changeDetectorRefs: ChangeDetectorRef,
              private episodeService: EpisodeService,
              private placeService: PlaceService,
              private locationService: LocationService) {
  }

  ngOnInit() {
    this.location = new Location();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getPlaces();
  }

  getSelectedPlaceIndex(): number {
    if (this.selection_places.selected.length === 0) {
      return -1;
    } else {
      return this.places.indexOf(this.selection_places.selected[0]);
    }
  }

  getSelectedLocationIndex(): number {
    if (this.selection_locations.selected.length === 0) {
      return -1;
    } else {
      return this.locations.indexOf(this.selection_locations.selected[0]);
    }
  }

  getPlaces(): void {
    this.placeService.getPlaces()
      .then(items => {
        this.places = items;
        this.refreshPlaces();
      });
  }

  setEpisode(episode: Episode) {
    // this.episode = episode;
    this.location.episode = episode;
  }

  addPlace(): void {
    this.openAddDialogForPlace();
  }

  openAddDialogForPlace() {
    this.dialog
      .open(AdminAddPlaceDialogComponent, {
        height: '45%', width: '35%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.places.push(result);
          this.refreshPlaces();
        }
    });
  }

  editPlace(): void {
    const index = this.getSelectedPlaceIndex();
    if (index !== -1) { this.openEditDialogForPlace(index); }
  }

  openEditDialogForPlace(index: number) {
    const dialogRef = this.dialog
      .open(AdminEditPlaceDialogComponent, {
        height: '45%', width: '35%'
      });
    dialogRef.componentInstance.place = this.places[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.places[index] = result;
        this.refreshPlaces();
      }
    });
  }

  deletePlace(): void {
    const index = this.getSelectedPlaceIndex();
    if (index !== -1) { this.openDeleteDialogForPlace(index); }
  }

  openDeleteDialogForPlace(index: number) {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.placeService.deletePlace(this.places[index].id)
            .then(() => {
              this.places.splice(index, 1);
              this.refreshPlaces();
            });
        }
    });
  }

  setPlace() {
    const index = this.getSelectedPlaceIndex();
    if (index !== -1) {
      // this.place = this.places[index];
      this.location.place = new Place();
      this.location.place.name = this.places[index].name;
    }
  }

  getLocations(): void {
    console.log('getLocations');
    this.locationService.getLocations(this.location.episode, this.location.place)
      .then(items => {
        console.log(items);
        this.locations = items;
        this.refreshLocations();
      });
  }

  refreshPlaces(): void {
    this.dataSource_places = new MatTableDataSource<Place>(this.places);
    this.changeDetectorRefs.detectChanges();
  }

  refreshLocations(): void {
    this.dataSource_locations = new MatTableDataSource<Location>(this.locations);
    this.changeDetectorRefs.detectChanges();
  }

  isAllPlacesSelected() {
    const numSelected = this.selection_places.selected.length;
    const numRows = this.dataSource_places.data.length;
    return numSelected === numRows;
  }

  masterToggle_places() {
    this.isAllPlacesSelected() ?
      this.selection_places.clear() :
      this.dataSource_places.data.forEach(row => this.selection_places.select(row));
  }

  isAllLocationsSelected() {
    const numSelected = this.selection_locations.selected.length;
    const numRows = this.dataSource_locations.data.length;
    return numSelected === numRows;
  }

  masterToggle_locations() {
    this.isAllPlacesSelected() ?
      this.selection_locations.clear() :
      this.dataSource_locations.data.forEach(row => this.selection_locations.select(row));
  }

  getCharactersList() {
    this.setPlace();
    this.getLocations();
  }

  addLocation(): void {
    this.openAddDialogForLocation();
  }

  openAddDialogForLocation() {
    console.log('open add dialog for location');
    const dialogRef = this.dialog
      .open(AdminAddLocationDialogComponent, {
        height: '45%', width: '35%'
      });
      console.log('set to dialog:');
      console.log(this.location);
      dialogRef.componentInstance.location = this.location;
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.locations.push(result);
          this.refreshLocations();
        }
      });
  }

  editLocation(): void {
    const index = this.getSelectedLocationIndex();
    if (index !== -1) { this.openEditDialogForLocation(index); }
  }

  openEditDialogForLocation(index: number): void {
    const dialogRef = this.dialog
      .open(AdminEditLocationDialogComponent, {
        height: '45%', width: '35%'
      });
    dialogRef.componentInstance.location = this.locations[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.locations[index] = result;
        this.refreshLocations();
      }
    });
  }

  deleteLocation(): void {
    const index = this.getSelectedLocationIndex();
    if (index !== -1) { this.openDeleteDialogForLocation(index); }
  }

  openDeleteDialogForLocation(index: number) {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.locationService.deleteLocation(this.locations[index].id)
          .then(() => {
            this.locations.splice(index, 1);
            this.refreshLocations();
          });
      }
    });
  }
}

