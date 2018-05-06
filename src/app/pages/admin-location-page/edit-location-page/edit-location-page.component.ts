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
import {DataService} from '../../../service/data.service';
import {Router} from '@angular/router';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {isBoolean} from "util";

@Component({
  selector: 'app-edit-location-page',
  templateUrl: 'edit-location-page.component.html',
  styleUrls: ['./edit-location-page.component.css']
})
export class EditLocationPageComponent implements OnInit {

  displayedColumns_locations = ['id', 'name', 'x', 'y', 'select'];
  dataSource_locations: MatTableDataSource<Location>;
  selection_locations = new SelectionModel<Location>(false, []);

  locations: Location[];
  location: Location;

  constructor(public  dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef,
              private locationService: LocationService,
              private dataService: DataService,
              private router: Router,
              private errorHandler: ErrorHandler) { }

  ngOnInit() {
    if (this.dataService.location && this.dataService.location.place) {
      this.getLocationData();
      this.getLocations();
    } else {
      this.router.navigate(['/404']);
    }
  }

  getLocationData() {
    this.location  = this.dataService.location;
    this.dataService.location = null;
  }

  getLocations(): void {
    this.locationService.getLocations(this.location.episode, this.location.place)
      .then(items => {
        this.locations = items;
        this.refreshLocations();
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  addLocation(): void {
    this.openAddDialogForLocation();
  }

  openAddDialogForLocation() {
    const dialogRef = this.dialog
      .open(AdminAddLocationDialogComponent, {
        height: '35%'
      });
    dialogRef.componentInstance.location = this.location;
    dialogRef.afterClosed().subscribe(result => {
      if (result && !isBoolean(result)) {
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
        height: '35%'
      });
    dialogRef.componentInstance.location = this.locations[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result && !isBoolean(result)) {
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
        height: '20%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.locationService.deleteLocation(this.locations[index].id)
          .then(() => {
            this.locations.splice(index, 1);
            this.refreshLocations();
          })
          .catch(err => {
            this.errorHandler.handleError(err);
          });
      }
    });
  }

  getSelectedLocationIndex(): number {
    if (this.selection_locations.selected.length === 0) {
      return -1;
    } else {
      return this.locations.indexOf(this.selection_locations.selected[0]);
    }
  }

  refreshLocations(): void {
    this.dataSource_locations = new MatTableDataSource<Location>(this.locations);
    this.changeDetectorRefs.detectChanges();
  }

  masterToggle_locations() {
    this.isAllLocationsSelected() ?
      this.selection_locations.clear() :
      this.dataSource_locations.data.forEach(row => this.selection_locations.select(row));
  }

  isAllLocationsSelected() {
    const numSelected = this.selection_locations.selected.length;
    const numRows = this.dataSource_locations.data.length;
    return numSelected === numRows;
  }

  goBack() {
    this.router.navigate(['admin/character_locations/episodes/places']);
  }
}
