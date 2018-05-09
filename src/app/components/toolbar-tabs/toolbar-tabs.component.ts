import { Component, OnInit } from '@angular/core';
import {PrincipalService} from '../../service/principal.service';

@Component({
  selector: 'app-toolbar-tabs',
  templateUrl: './toolbar-tabs.component.html',
  styleUrls: ['./toolbar-tabs.component.css']
})
export class ToolbarTabsComponent implements OnInit {
  tabLinks = [
    {label: 'Персонажи', link: 'characters'},
    {label: 'Карта', link: 'map'},
    {label: 'Игры', link: 'games'}
  ];
  constructor(public principalService: PrincipalService) { }

  ngOnInit() {
  }

}
