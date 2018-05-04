import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {MatDialogRef} from '@angular/material';
import {Episode} from '../../../model/Episode';
import {EpisodeService} from '../../../service/episode.service';

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
              private episodeService: EpisodeService) {
    this.newEpisode = new Episode();
  }
  ngOnInit(): void {
  }
  addEpisode(): void {
    this.newEpisode.seasonNumber = this.season.seasonNumber;
    this.episodeService.createEpisode(this.newEpisode)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
}
