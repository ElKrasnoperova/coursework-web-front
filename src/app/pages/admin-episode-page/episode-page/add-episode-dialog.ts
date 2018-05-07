import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {MatDialogRef} from '@angular/material';
import {Episode} from '../../../model/Episode';
import {EpisodeService} from '../../../service/episode.service';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {PrincipalService} from '../../../service/principal.service';

@Component ({
  selector: 'app-add-episode-dialog',
  templateUrl: 'add-episode-dialog.html',
  styleUrls: ['../admin-episode-page.component.css']
})
export class AdminAddEpisodeDialogComponent implements OnInit {
  newEpisode: Episode;
  season: Episode;
  constructor(private http: Http,
              private dialogRef: MatDialogRef<AdminAddEpisodeDialogComponent>,
              private episodeService: EpisodeService,
              private errorHandler: ErrorHandler,
              principalService: PrincipalService) {
    this.newEpisode = new Episode();
  }
  ngOnInit(): void {
  }
  addEpisode(): void {
    console.log(this.newEpisode);
    console.log(this.season);
    this.newEpisode.season = this.season;
    this.episodeService.createEpisode(this.newEpisode)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
}
