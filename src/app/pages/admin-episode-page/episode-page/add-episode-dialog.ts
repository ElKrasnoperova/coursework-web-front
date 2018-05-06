import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {MatDialogRef} from '@angular/material';
import {Episode} from '../../../model/Episode';
import {EpisodeService} from '../../../service/episode.service';
import {ErrorHandler} from '../../../service/error-handler/error.handler';

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
              private errorHandler: ErrorHandler) {
    this.newEpisode = new Episode();
  }
  ngOnInit(): void {
  }
  addEpisode(): void {
    this.newEpisode.season.episodeNumber = this.season.season.episodeNumber;
    this.episodeService.createEpisode(this.newEpisode)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
}
