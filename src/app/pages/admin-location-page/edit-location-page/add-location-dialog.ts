import {Component, OnInit} from '@angular/core';
import {Location} from '../../../model/Location';
import {LocationService} from '../../../service/location.service';
import {Character} from '../../../model/Character';
import {Place} from '../../../model/Place';
import {Episode} from '../../../model/Episode';
import {AdminAddLanguageDialogComponent} from '../../admin-game-page/add-language-dialog';
import {MatDialogRef} from '@angular/material';

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

    console.log('add-location; newLoc = ...location :');
    console.log(this.location);
    console.log(this.newLocation);

    this.getCharactersForEpisode();
  }
  constructor(private locationService: LocationService,
              private dialogRef: MatDialogRef<AdminAddLocationDialogComponent>) { }

  getCharactersForEpisode(): void {
    this.locationService.getCharactersForEpisode(this.newLocation.episode)
      .then(items => {
        this.characters = items;
        console.log('this episode"s characters:');
        console.log(items);
      });
  }

  addLocation(): void {
    this.locationService.createLoation(this.newLocation)
      .then(response =>  this.dialogRef.close(response));
  }

  setCharacter(character: Character) {
    this.newLocation.character = character;
  }
}
