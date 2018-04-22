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

  ngOnInit(): void {
    console.log('ngOnInit-Edit ' + this.character);
  }

  constructor(private characterService: CharacterService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>) {
    console.log('constructor-Edit ' + this.character);
  }

  updateCharacter(): void {
    console.log('-> server');
    console.log(this.character.name);
    this.characterService.updateCharacter(this.character)
      .then(response => {
        console.log(`<- response: ${response}`);
        this.dialogRef.close(response);
      });
  }

  // getIrrelevantCharacterData(): void {
  //   this.characterService.getCharacter(this.character.id)
  //     .then(response => this.character = response );
  // }
}
