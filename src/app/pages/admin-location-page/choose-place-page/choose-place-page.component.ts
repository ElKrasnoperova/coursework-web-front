import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Place} from '../../../model/Place';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdminAddPlaceDialogComponent} from './add-place-dialog';
import {AdminEditPlaceDialogComponent} from './edit-place-dialog';
import {ConfirmActionDialogComponent} from '../../../components/confirm-action/confirm-action-dialog';
import {PlaceService} from '../../../service/place.service';
import {Location} from '../../../model/Location';
import {LocationService} from '../../../service/location.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-place-page',
  templateUrl: './choose-place-page.component.html',
  styleUrls: ['./choose-place-page.component.css']
})
export class ChoosePlacePageComponent implements OnInit {

  isSelected = false;

  location: Location;

  places: Place[];
  locations: Location[];


  displayedColumns_places = ['id', 'name', 'select'];
  dataSource_places: MatTableDataSource<Place>;
  selection_places = new SelectionModel<Place>(false, []);

  dataSource_locations: MatTableDataSource<Location>;

  constructor(public dialog: MatDialog,
              private router: Router,
              private placeService: PlaceService,
              private locationService: LocationService,
              private changeDetectorRefs: ChangeDetectorRef) {
    }

  ngOnInit() {
    this.location = new Location();
    this.getPlaces();
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

  refreshLocations(): void {
    this.dataSource_locations = new MatTableDataSource<Location>(this.locations);
    this.changeDetectorRefs.detectChanges();
  }


  getCharactersList() {
    this.setPlace();
    this.getLocations();
    if (this.isSelected) {
      this.router.navigate(['admin/location/3']);
    }
  }

  getSelectedPlaceIndex(): number {
    if (this.selection_places.selected.length === 0) {
      return -1;
    } else {
      this.isSelected = true;
      return this.places.indexOf(this.selection_places.selected[0]);
    }
  }

  getPlaces(): void {
    this.placeService.getPlaces()
      .then(items => {
        this.places = items;
        this.refreshPlaces();
      });
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

  refreshPlaces(): void {
    this.dataSource_places = new MatTableDataSource<Place>(this.places);
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


}
