import {Component, OnInit} from '@angular/core';
import {Location} from '../../../model/Location';
import {AdminAddLanguageDialogComponent} from '../../admin-game-page/languages-page/add-language-dialog';
import {MatDialogRef} from '@angular/material';
import {LocationService} from '../../../service/location.service';
import {Character} from '../../../model/Character';

@Component ({
  selector: 'app-edit-location-dialog',
  templateUrl: 'edit-location-dialog.html',
  styleUrls: ['../admin-location-page.component.css']
})
export class AdminEditLocationDialogComponent implements OnInit {
  location: Location;
  updatedLocation: Location;

  characters: Character[];

  ngOnInit(): void {
    this.updatedLocation = {...this.location};
    this.getCharactersForEpisode();
  }
  constructor (private locationService: LocationService,
               private dialogRef: MatDialogRef<AdminAddLanguageDialogComponent>) {
  }
  updateLocation(): void {
    this.locationService.updateLocation(this.updatedLocation)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
  setCharacter(character: Character) {
    this.updatedLocation.character = character;
  }
  getCharactersForEpisode(): void {
    this.locationService.getCharactersForEpisode(this.updatedLocation.episode)
      .then(items => {
        this.characters = items;
      });
  }
}
