import {Component, OnInit} from '@angular/core';
import {Place} from '../../../model/Place';
import {AdminAddLanguageDialogComponent} from '../../admin-game-page/languages-page/add-language-dialog';
import {MatDialogRef} from '@angular/material';
import {PlaceService} from '../../../service/place.service';
import {ErrorHandler} from '../../../service/error-handler/error.handler';

@Component ({
  selector: 'app-add-place-dialog',
  templateUrl: 'add-place-dialog.html',
  styleUrls: ['../admin-location-page.component.css']
})

export class AdminAddPlaceDialogComponent implements OnInit {
  newPlace: Place;
  constructor(private dialogRef: MatDialogRef<AdminAddLanguageDialogComponent>,
              private placeService: PlaceService,
              private errorHandler: ErrorHandler) {
    this.newPlace = new Place();
  }
  ngOnInit(): void {
  }
  addPlace(): void {
    this.placeService.createPlace(this.newPlace)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
}
