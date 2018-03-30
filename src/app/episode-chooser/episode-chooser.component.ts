// TODO Change color of selected item
// TODO Make component adaptive


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-chooser',
  templateUrl: './episode-chooser.component.html',
  styleUrls: ['./episode-chooser.component.css']
})
export class EpisodeChooserComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  selectedSeason = '';
  selectedEpisode = '';
  constructor() { }

  ngOnInit() {
  }

}
