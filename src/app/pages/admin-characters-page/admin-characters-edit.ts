import {Component, Inject, OnInit} from '@angular/core';
import {AdminCharactersAddDialogComponent} from './admin-characters-add';
import {CharacterService} from '../../service/character.service';
import {Character} from '../../model/Character';
import {MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../../model/Photo';
import {Episode} from '../../model/Episode';

@Component({
  selector: 'app-admin-character-edit-dialog',
  templateUrl: './admin-characters-edit.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersEditDialogComponent implements OnInit {
  character: Character;
  updatedCharacter: Character;
  ngOnInit(): void {
    this.updatedCharacter = {...this.character};
  }
  constructor(private characterService: CharacterService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>) {
  }
  updateCharacter(): void {
    this.characterService.updateCharacter(this.updatedCharacter)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
  setPhoto(photo: Photo): void {
    this.updatedCharacter.photo = photo;
  }
}
