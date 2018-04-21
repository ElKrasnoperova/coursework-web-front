import {Component, OnInit} from '@angular/core';
import {AdminCharactersAddDialogComponent} from './admin-characters-add';
import {CharacterService} from '../../service/character.service';
import {Character} from '../../model/Character';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-character-edit-dialog',
  templateUrl: './admin-characters-edit.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersEditDialogComponent implements OnInit {
  character: Character;
  // id:        number;
  ngOnInit(): void {
    console.log(`onInit-Edit: id ${this.character.id}`);
    this.getIrrelevantCharacterData();
  }
  constructor(private characterService: CharacterService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>) {
  }

  updateCharacter(): void {
    this.characterService.updateCharacter(this.character)
      .then(response => {
        this.dialogRef.close(response);
      });
  }

  getIrrelevantCharacterData(): void {
    this.characterService.getCharacter(this.character.id)
      .then(response => this.character = response );
  }
}
