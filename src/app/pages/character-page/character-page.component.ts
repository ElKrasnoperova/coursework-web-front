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

  character: Character;
  characters: Character[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private characterService: CharacterService) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .then(characters => {
        this.characters = characters;
        this.initCards();
      });
  }

  initCards(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    if (id !== 0) {
      const character = this.findById(id);
      if (character) {
        this.setCharacter(character);
      } else {
        this.router.navigate(['/notFound']);
      }
    } else if (id === 0) {
      this.setCharacter(this.characters[0]) ;
    }
  }

  findById(id: number): Character {
    return this.characters.filter(character => character.id === id)[0];
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
