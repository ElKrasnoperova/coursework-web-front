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
    if (season) {
      this.episodeService.getEpisodesForSeason(season)
        .then(items => {
          this.episodes = items;
          this.enableEpisodeSelect();
        });
    } else {
      this.setEpisode(null);
      this.disableEpisodeSelect();
    }
  }

  setEpisode(value: any) {
    this.selectedEpisode = value;
    this.episodeSelected.emit(value);
  }

  enableEpisodeSelect() {
    this.episodeDisabled = false;
  }

  disableEpisodeSelect() {
    this.episodes = [];
    this.episodeDisabled = true;
  }
}
