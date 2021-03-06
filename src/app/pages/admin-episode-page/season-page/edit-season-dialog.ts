import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Episode} from '../../../model/Episode';
import {EpisodeService} from '../../../service/episode.service';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {PrincipalService} from '../../../service/principal.service';

@Component({
  selector: 'app-edit-season-dialog',
  templateUrl: 'edit-season-dialog.html',
  styleUrls: ['../admin-episode-page.component.css']
})
export class AdminEditSeasonDialogComponent implements OnInit {
  season: Episode;
  updatedSeason: Episode;
  ngOnInit(): void {
    this.updatedSeason = {...this.season};
  }
  constructor (private episodeService: EpisodeService,
               private dialogRef: MatDialogRef<AdminEditSeasonDialogComponent>,
               private errorHandler: ErrorHandler,
               principalService: PrincipalService) {
  }
  updateSeason(): void {
    this.episodeService.updateSeason(this.updatedSeason)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
}
