import {Component, OnInit} from '@angular/core';
import {Place} from '../../model/Place';
import {AdminAddLanguageDialogComponent} from '../admin-game-page/add-language-dialog';
import {MatDialogRef} from '@angular/material';
import {PlaceService} from '../../service/place.service';

@Component ({
  selector: 'app-edit-place-dialog',
  templateUrl: 'edit-place-dialog.html',
  styleUrls: ['./admin-location-page.component.css']
})
export class AdminEditPlaceDialogComponent implements OnInit {
  place: Place;
  updatedPlace: Place;
  ngOnInit(): void {
    this.updatedPlace = {...this.place};
  }
  constructor (private placeService: PlaceService,
               private dialogRef: MatDialogRef<AdminAddLanguageDialogComponent>) {
  }
  updatePlace(): void {
    this.placeService.updatePlace(this.updatedPlace)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
}
