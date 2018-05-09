import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../model/Character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input()  character: Character;

  constructor() {
  }
  ngOnInit() {
  }
}


