import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Episode} from '../../../model/Episode';
import {EpisodeService} from '../../../service/episode.service';
import {ConfirmActionDialogComponent} from '../../../components/confirm-action/confirm-action-dialog';
import {AdminAddEpisodeDialogComponent} from './add-episode-dialog';
import {AdminEditEpisodeDialogComponent} from './edit-episode-dialog';
import {DataService} from '../../../service/data.service';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {isBoolean} from "util";

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})
export class EpisodePageComponent implements OnInit {

  selection_episodes = new SelectionModel<Episode>(false, []);
  dataSource_episodes: MatTableDataSource<Episode>;
  displayedColumns_episodes = ['id', 'episodeNumber', 'name', 'select'];

  episodes: Episode[];

  selectedSeason: Episode;

  constructor(public  dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef,
              private episodeService: EpisodeService,
              private dataService: DataService,
              private router: Router, location: PlatformLocation,
              private errorHandler: ErrorHandler) {
    location.onPopState(() => {
      this.saveData();
    });
  }

  saveData(): void {
    this.dataService.season = this.selectedSeason;
  }

  ngOnInit() {
    if (this.dataService.season) {
      this.setSeasonInfo();
      this.getEpisodesForSelectedSeason();
    } else {
      this.router.navigate(['/404']);
    }
  }

  setSeasonInfo() {
    this.selectedSeason = this.dataService.season;
    this.dataService.season = null;
  }

  getEpisodesForSelectedSeason(): void {
    this.episodeService.getEpisodesForSeason(this.selectedSeason)
      .then( items => {
        this.episodes = items;
        this.refreshEpisodes();
      });
  }

  deleteEpisode(): void {
    const index = this.getSelectedEpisodeIndex();
    if (index !== -1) { this.openDeleteDialogForEpisode(index); }
  }

  openDeleteDialogForEpisode(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '20%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.episodeService.deleteEpisode( this.episodes[index].id )
          .then(() => {
            this.episodes.splice(index, 1);
            this.refreshEpisodes();
          })
          .catch(err => {
            this.errorHandler.handleError(err);
          });
      }
    });
  }

  addEpisode(): void {
    this.openAddDialogForEpisode();
  }

  openAddDialogForEpisode(): void {
    const dialogRef = this.dialog
      .open(AdminAddEpisodeDialogComponent, {
        height: '52%', width: '35%'
      });
    dialogRef.componentInstance.season = this.selectedSeason;
    dialogRef.afterClosed().subscribe(result => {
      if (result && !isBoolean(result)) {
        this.episodes.push(result);
        this.refreshEpisodes();
      }
    });
  }

  editEpisode(): void {
    const index = this.getSelectedEpisodeIndex();
    if (index !== -1) { this.openEditDialogForEpisode(index); }
  }

  openEditDialogForEpisode(index: number) {
    const dialogRef = this.dialog
      .open(AdminEditEpisodeDialogComponent, {
        height: '35%', width: '35%'
      });
    dialogRef.componentInstance.episode = this.episodes[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result && !isBoolean(result)) {
        this.episodes[index] = result;
        this.refreshEpisodes();
      }
    });
  }

  private refreshEpisodes() {
    this.dataSource_episodes = new MatTableDataSource<Episode>(this.episodes);
    this.changeDetectorRefs.detectChanges();
  }

  private getSelectedEpisodeIndex() {
    if (this.selection_episodes.selected.length === 0) {
      return -1;
    } else {
      return this.episodes.indexOf(this.selection_episodes.selected[0]);
    }
  }

  isAllEpisodesSelected() {
    const numSelected = this.selection_episodes.selected.length;
    const numRows = this.dataSource_episodes.data.length;
    return numSelected === numRows;
  }

  masterEpisodesToggle() {
    this.isAllEpisodesSelected() ?
      this.selection_episodes.clear() :
      this.dataSource_episodes.data.forEach(row => this.selection_episodes.select(row));
  }

  goBack(){
    this.router.navigate(['admin/seasons']);
  }
}
