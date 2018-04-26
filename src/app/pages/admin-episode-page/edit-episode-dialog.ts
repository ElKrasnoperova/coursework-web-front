import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Episode} from '../../model/Episode';
import {EpisodeService} from '../../service/episode.service';

@Component({
  selector: 'app-edit-episode-dialog',
  templateUrl: 'edit-episode-dialog.html',
  styleUrls: ['./admin-episode-page.component.css']
})
export class AdminEditEpisodeDialogComponent implements OnInit {
  episode: Episode;
  updatedEpisode: Episode;
  ngOnInit(): void {
    this.updatedEpisode = {...this.episode};
  }
  constructor (private episodeService: EpisodeService,
               private dialogRef: MatDialogRef<AdminEditEpisodeDialogComponent>) {
  }
  updateEpisode(): void {
    this.episodeService.updateEpisode(this.updatedEpisode)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
}
