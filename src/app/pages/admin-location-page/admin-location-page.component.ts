import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Episode} from '../../model/Episode';
import {EpisodeService} from '../../service/episode.service';
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'app-admin-location-page',
  templateUrl: './admin-location-page.component.html',
  styleUrls: ['./admin-location-page.component.css']
})
export class AdminLocationPageComponent implements OnInit {

  episodes:               Episode[];
  seasonsCount:           number;
  selectedSeasonNumber:   number;
  selectedEpisodeNumber:  number;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private episodeService: EpisodeService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getAllSeasons();
    this.getSeasonsCount();
  }

  getAllSeasons(): void {
    this.episodeService.getSeasons()
      .then( items => {
        this.episodes = items;
      });
  }

  getSeasonsCount(): void {
    this.episodeService.getSeasonsCount()
      .then(count => {
        this.seasonsCount = count;
      });
  }

  getCharactersForEpisode(): void {
  }

  setSelectedSeasonNumber(n: number): void {
    this.selectedSeasonNumber = n;
  }

  setSelectedEpisodeNumber(n: number) {
    this.selectedEpisodeNumber = n;
  }
}
