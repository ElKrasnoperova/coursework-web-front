import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Episode} from '../../model/Episode';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdminAddEpisodeDialogComponent} from './add-episode-dialog';
import {AdminAddSeasonDialogComponent} from './add-season-dialog';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';
import {SelectionModel} from '@angular/cdk/collections';
import {EpisodeService} from '../../service/episode.service';
import {AdminEditEpisodeDialogComponent} from './edit-episode-dialog';
import {AdminEditSeasonDialogComponent} from './edit-season-dialog';

@Component({
  selector: 'app-admin-episode-page',
  templateUrl: './admin-episode-page.component.html',
  styleUrls: ['./admin-episode-page.component.css']
})
export class AdminEpisodePageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selection_seasons = new SelectionModel<Episode>(false, []);
  dataSource_seasons: MatTableDataSource<Episode>;
  displayedColumns_seasons = ['id', 'seasonNumber', 'select'];

  selection_episodes = new SelectionModel<Episode>(false, []);
  dataSource_episodes: MatTableDataSource<Episode>;
  displayedColumns_episodes  = ['id', 'episodeNumber', 'name', 'select'];

  seasons:        Episode[];
  episodes:       Episode[];

  selectedSeason: Episode;

  constructor(  private _formBuilder: FormBuilder,
                public  dialog: MatDialog,
                private changeDetectorRefs: ChangeDetectorRef,
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
  }

  getAllSeasons(): void {
    this.episodeService.getSeasons()
      .then( items => {
        this.seasons = items;
        this.refreshSeasons();
      });
  }

  getEpisodesForSelectedSeason(): void {
    this.episodeService.getEpisodesForSeasons(this.selectedSeason.seasonNumber)
      .then( items => {
        this.episodes = items;
        this.refreshEpisodes();
      });
  }

  getSeason(): void {
    const index = this.getSelectedSeasonIndex();
    if (index !== -1) {
      this.selectedSeason = this.seasons[index];
      this.getEpisodesForSelectedSeason();
    }
  }

  deleteSeason(): void {
    const index = this.getSelectedSeasonIndex();
    if (index !== -1) { this.openDeleteDialogForSeason(index); }
  }

  openDeleteDialogForSeason(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.episodeService.deleteEpisode( this.seasons[index].id )
          .then(() => {
            this.seasons.splice(index, 1);
            this.refreshSeasons();
          });
      }
    });
  }

  deleteEpisode(): void {
    const index = this.getSelectedEpisodeIndex();
    if (index !== -1) { this.openDeleteDialogForEpisode(index); }
  }

  openDeleteDialogForEpisode(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.episodeService.deleteEpisode( this.episodes[index].id )
            .then(() => {
              this.episodes.splice(index, 1);
              this.refreshEpisodes();
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
        height: '40%', width: '31%'
      });
    dialogRef.componentInstance.season = this.selectedSeason;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.episodes.push(result);
        this.refreshEpisodes();
      }
    });
  }

  addSeason(): void {
    this.openAddDialogForSeason();
  }

  openAddDialogForSeason() {
    this.dialog
      .open(AdminAddSeasonDialogComponent, {
        height: '40%', width: '31%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.seasons.push(result);
          this.refreshSeasons();
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
      if (result) {
        this.episodes[index] = result;
        this.refreshEpisodes();
      }
    });
  }

  editSeason(): void {
    const index = this.getSelectedSeasonIndex();
    if (index !== -1) { this.openEditDialogForSeason(index); }
  }

  openEditDialogForSeason(index: number) {
    const dialogRef = this.dialog
      .open(AdminEditSeasonDialogComponent, {
        height: '35%', width: '35%'
      });
    dialogRef.componentInstance.season = this.seasons[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.seasons[index] = result;
        this.selectedSeason = result;
        this.refreshSeasons();
      }
    });
  }

  private refreshSeasons() {
    this.dataSource_seasons = new MatTableDataSource<Episode>(this.seasons);
    this.changeDetectorRefs.detectChanges();
  }

  private refreshEpisodes() {
    this.dataSource_episodes = new MatTableDataSource<Episode>(this.episodes);
    this.changeDetectorRefs.detectChanges();
  }

  private getSelectedSeasonIndex() {
    if (this.selection_seasons.selected.length === 0) {
      return -1;
    } else {
      return this.seasons.indexOf(this.selection_seasons.selected[0]);
    }
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

  isAllSeasonsSelected() {
    const numSelected = this.selection_seasons.selected.length;
    const numRows = this.dataSource_seasons.data.length;
    return numSelected === numRows;
  }

  masterSeasonsToggle() {
    this.isAllSeasonsSelected() ?
      this.selection_seasons.clear() :
      this.dataSource_seasons.data.forEach(row => this.selection_seasons.select(row));
  }
}
