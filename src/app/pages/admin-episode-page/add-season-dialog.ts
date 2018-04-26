import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {MatDialogRef} from '@angular/material';
import {Episode} from '../../model/Episode';
import {EpisodeService} from '../../service/episode.service';

@Component ({
  selector: 'app-add-season-dialog',
  templateUrl: 'add-season-dialog.html',
  styleUrls: ['./admin-episode-page.component.css']
})
export class AdminAddSeasonDialogComponent implements OnInit {
  newSeason: Episode;
  constructor(private  http: Http,
              private dialogRef: MatDialogRef<AdminAddSeasonDialogComponent>,
              private episodeService: EpisodeService) {
    this.newSeason = new Episode();
  }
  ngOnInit(): void {
  }
  addSeason(): void {
    this.episodeService.createSeason(this.newSeason)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
}
