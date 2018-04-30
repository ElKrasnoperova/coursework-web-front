import {Component, Input, OnInit, Output} from '@angular/core';
import {Language} from '../../model/Language';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {

  @Input() language: Language;

  constructor() {
  }

  ngOnInit() {
  }

}
