import {Component, OnInit} from '@angular/core';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';
import {MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Episode} from '../../model/Episode';
import {Photo} from '../../model/Photo';


@Component({
  selector: 'app-admin-characters-add-dialog',
  templateUrl: './admin-characters-add.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersAddDialogComponent implements OnInit {
  // selectedFile: string = null;
  // img: File;
  // disabled = true;

  newCharacter: Character;

  ngOnInit(): void {
    this.newCharacter = new Character();
  }
  constructor(private characterService: CharacterService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>) {
  }
  createCharacter(): void {
    this.characterService.createCharacter(this.newCharacter)
      .then(response => {
        this.dialogRef.close(response);
      });
  }

  setFirstEpisode(firstEpisode: Episode) {
    this.newCharacter.firstEpisode = firstEpisode;
  }

  setLastEpisode(lastEpisode: Episode) {
    this.newCharacter.lastEpisode = lastEpisode;
  }

  setPhoto(photo: Photo) {
    this.newCharacter.photo = photo;
  }
}
