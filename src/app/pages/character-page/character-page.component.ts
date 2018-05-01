import {Component, OnInit} from '@angular/core';
import {Character} from '../../model/Character';
import {CharacterService} from '../../service/character.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {

  nextCharacter: Character;
  previousCharacter: Character;
  currentId: number;
  character: Character;
  characters: Character[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private characterService: CharacterService) {
  }

  ngOnInit() {
    this.currentId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCharacters();
  }

  findCurrentCharacter() {
    let isRightId = false;
    this.characters.forEach(value => {
      if (value.id === this.currentId) {
        isRightId = true;
        this.setCharacter(value);
      }
    });

    if (!isRightId) { this.router.navigate(['/characterNotFound']); }

  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .then(characters => {
        this.characters = characters;
        this.findCurrentCharacter();
        this.setNeighboursCharacters();
      });
  }

  setCharacter(character: Character) {
    this.character = character;
    this.setNeighboursCharacters();
  }

  setNeighboursCharacters() {
    if (this.character.id === this.characters[this.characters.length - 1].id) {
      this.previousCharacter = this.characters[this.characters.indexOf(this.character) - 1];
      this.nextCharacter = this.characters[0];
    } else if (this.character.id === this.characters[0].id) {
      this.previousCharacter = this.characters[this.characters.length - 1];
      this.nextCharacter = this.characters[1];
    } else {
      this.previousCharacter = this.characters[this.characters.indexOf(this.character) - 1];
      this.nextCharacter = this.characters[this.characters.indexOf(this.character) + 1];
    }
  }

}
