import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-tabs',
  templateUrl: './toolbar-tabs.component.html',
  styleUrls: ['./toolbar-tabs.component.css']
})
export class ToolbarTabsComponent implements OnInit {
  tabLinks = [
    {label: 'Вход', link: 'login'},
    {label: 'Персонажи', link: 'characters'},
    {label: 'Карта', link: 'map'},
    {label: 'Игры', link: 'games'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
