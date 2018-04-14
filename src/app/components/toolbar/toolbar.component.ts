import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private event: MatTabChangeEvent;
  tabLinks = [
    {label: 'Вход', link: 'login'},
    {label: 'Персонажи', link: 'characters'},
    {label: 'Карта', link: 'map'},
    {label: 'Игры', link: 'games'}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
  }

}
