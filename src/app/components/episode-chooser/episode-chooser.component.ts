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
  episodeDisabled = true;
  seasonDisabled = true;
  selectedSeason = null;
  selectedEpisode = null;
  constructor() { }

  ngOnInit() {
  }

  enableEpisodeSelect() {
    this.episodeDisabled = false;
  }

  enableChronology(state) {
    if (state === true) {
      if (this.selectedSeason !== null) {
        this.episodeDisabled = false;
      }
      this.seasonDisabled = false;
    } else {
      this.seasonDisabled = true;
      this.episodeDisabled = true;
    }
  }
}
