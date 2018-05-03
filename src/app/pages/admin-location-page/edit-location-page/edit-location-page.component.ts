import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Location} from '../../../model/Location';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdminAddLocationDialogComponent} from './add-location-dialog';
import {Place} from '../../../model/Place';
import {LocationService} from '../../../service/location.service';
import {AdminEditLocationDialogComponent} from './edit-location-dialog';
import {ConfirmActionDialogComponent} from '../../../components/confirm-action/confirm-action-dialog';
import {Character} from '../../../model/Character';

@Component({
  selector: 'app-edit-location-page',
  templateUrl: 'edit-location-page.component.html',
  styleUrls: ['./edit-location-page.component.css']
})
export class EditLocationPageComponent implements OnInit {

  displayedColumns_locations = ['id', 'name', 'x', 'y', 'select'];
  dataSource_locations: MatTableDataSource<Location>;
  selection_locations = new SelectionModel<Location>(false, []);

  dataSource_places: MatTableDataSource<Place>;
  selection_places = new SelectionModel<Place>(false, []);

  location: Location;
  places: Place[];
  locations: Location[];
  characters: Character[];

  constructor(public dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef,
              private locationService: LocationService) { }

  ngOnInit() {
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

  masterToggle_locations() {
    this.isAllPlacesSelected() ?
      this.selection_locations.clear() :
      this.dataSource_locations.data.forEach(row => this.selection_locations.select(row));
  }

  refreshLocations(): void {
    this.dataSource_locations = new MatTableDataSource<Location>(this.locations);
    this.changeDetectorRefs.detectChanges();
  }

  isAllLocationsSelected() {
    const numSelected = this.selection_locations.selected.length;
    const numRows = this.dataSource_locations.data.length;
    return numSelected === numRows;
  }

  isAllPlacesSelected() {
    const numSelected = this.selection_places.selected.length;
    const numRows = this.dataSource_places.data.length;
    return numSelected === numRows;
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

  getSelectedLocationIndex(): number {
    if (this.selection_locations.selected.length === 0) {
      return -1;
    } else {
      return this.locations.indexOf(this.selection_locations.selected[0]);
    }
  }

  getCharactersList() {
    this.setPlace();
    this.getLocations();
  }

  setPlace() {
    const index = this.getSelectedPlaceIndex();
    if (index !== -1) {
      // this.place = this.places[index];
      this.location.place = new Place();
      this.location.place.name = this.places[index].name;
    }
  }

  getSelectedPlaceIndex(): number {
    if (this.selection_places.selected.length === 0) {
      return -1;
    } else {
      return this.places.indexOf(this.selection_places.selected[0]);
    }
  }

}
