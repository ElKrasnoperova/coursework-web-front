import {Component} from '@angular/core';
import {PrincipalService} from '../../service/principal.service';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent {
  dataSource = ITEMS;

  fillerNav = this.dataSource;

  constructor() {
  }
}

export const ITEMS = [
  {id: 1, value: 'Местоположение', path: 'character_locations'},
  {id: 2, value: 'Словари', path: 'languages'},
  {id: 3, value: 'Персонажи', path: 'characters'},
  {id: 4, value: 'Пользователи', path: 'users'},
  {id: 5, value: 'Эпизоды', path: 'seasons'},
  {id: 6, value: 'Фото', path: 'photos'}
];
