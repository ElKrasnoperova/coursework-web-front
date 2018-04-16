import {Component} from '@angular/core';

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
  {id: 1, value: 'Местоположение', path: 'location'},
  {id: 2, value: 'Игры', path: 'games'},
  {id: 3, value: 'Персонажи', path: 'characters'},
  {id: 4, value: 'Рассылка', path: 'newsletter'},
];
