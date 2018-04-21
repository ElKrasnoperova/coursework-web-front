import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-chooser-for-admin',
  templateUrl: './episode-chooser-for-admin.component.html',
  styleUrls: ['./episode-chooser-for-admin.component.css']
})
export class EpisodeChooserForAdminComponent implements OnInit {

  seasons = [
    {value: '1', viewValue: 'Сезон 1'},
    {value: '2', viewValue: 'Сезон 2'},
    {value: '3', viewValue: 'Сезон 3'}
  ];

  episodes = [
    {value: '1', viewValue: 'Серия 1'},
    {value: '2', viewValue: 'Серия 2'},
    {value: '3', viewValue: 'Серия 3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
