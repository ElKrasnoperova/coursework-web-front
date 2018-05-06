import {Component, OnInit} from '@angular/core';
import {Location} from '../../../model/Location';
import {LocationService} from '../../../service/location.service';
import {Character} from '../../../model/Character';
import {Place} from '../../../model/Place';
import {Episode} from '../../../model/Episode';
import {AdminAddLanguageDialogComponent} from '../../admin-game-page/languages-page/add-language-dialog';
import {MatDialogRef} from '@angular/material';
import {ErrorHandler} from '../../../service/error-handler/error.handler';

@Component ({
  selector: 'app-add-location-dialog',
  templateUrl: 'add-location-dialog.html',
  styleUrls: ['../admin-location-page.component.css']
})
export class AdminAddLocationDialogComponent implements OnInit {
  newLocation: Location;
  location: Location;

  characters: Character[];

  ngOnInit(): void {
    this.newLocation = new Location();
    this.newLocation = {...this.location};
    this.getCharactersForEpisode();
  }
  constructor(private locationService: LocationService,
              private dialogRef: MatDialogRef<AdminAddLocationDialogComponent>,
              private errorHandler: ErrorHandler) { }

  getCharactersForEpisode(): void {
    this.locationService.getCharactersForEpisode(this.newLocation.episode)
      .then(items => {
        this.characters = items;
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  addLocation(): void {
    this.locationService.createLoation(this.newLocation)
      .then(response =>  this.dialogRef.close(response))
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  setCharacter(character: Character) {
    this.newLocation.character = character;
  }
}
