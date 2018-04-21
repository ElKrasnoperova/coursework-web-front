import {Component, OnInit} from '@angular/core';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';


@Component({
  selector: 'app-admin-characters-add-dialog',
  templateUrl: './admin-characters-add.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersAddDialogComponent implements OnInit {
  newCharacter: Character;
  ngOnInit(): void {
    this.newCharacter = new Character;
  }
  constructor(private characterService: CharacterService) {
  }

  createCharacter(): void {
    this.characterService.createCharacter(this.newCharacter)
      .then(response => {
        console.log('response ' + response);
      });
  }
}
