// TODO Change color of selected item
// TODO Make component adaptive

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Episode} from '../../model/Episode';
import {EpisodeService} from '../../service/episode.service';

@Component({
  selector: 'app-episode-chooser',
  templateUrl: './episode-chooser.component.html',
  styleUrls: ['./episode-chooser.component.css']
})
export class EpisodeChooserComponent implements OnInit {
  seasons: Episode[];
  episodes: Episode[];

  selectedEpisode: Episode;

  episodeDisabled = true;

  @Output()
  episodeSelected: EventEmitter<Episode> = new EventEmitter<Episode>();

  ngOnInit() {
    this.getSeasons();
  }

  constructor(private episodeService: EpisodeService) {
    this.selectedEpisode = new Episode();
  }

  getSeasons() {
    this.episodeService.getSeasons()
      .then( items => {
        this.seasons = items;
      });
  }

  getEpisodesForSeason(season: Episode) {
    this.episodeService.getEpisodesForSeasons(season.seasonNumber)
      .then(items => {
        this.episodes = items;
      });
  }

  setEpisode(value: any) {
    this.selectedEpisode = value;
    this.episodeSelected.emit(value);
  }

  // checked = false;
  // indeterminate = false;
  // align = 'start';
  // selectedSeason = null;
  // selectedEpisode = null;
  //

  enableEpisodeSelect() {
    this.episodeDisabled = false;
  }
  //
  // enableChronology(state) {
  //   if (state === true) {
  //     if (this.selectedSeason !== null) {
  //       this.episodeDisabled = false;
  //     }
  //     this.seasonDisabled = false;
  //   } else {
  //     this.seasonDisabled = true;
  //     this.episodeDisabled = true;
  //   }
  // }
}
