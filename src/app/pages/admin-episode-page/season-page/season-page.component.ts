import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Episode} from '../../../model/Episode';
import {EpisodeService} from '../../../service/episode.service';
import {ConfirmActionDialogComponent} from '../../../components/confirm-action/confirm-action-dialog';
import {AdminAddSeasonDialogComponent} from './add-season-dialog';
import {AdminEditSeasonDialogComponent} from './edit-season-dialog';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-season-page',
  templateUrl: './season-page.component.html',
  styleUrls: ['./season-page.component.css']
})
export class SeasonPageComponent implements OnInit {

  selection_seasons = new SelectionModel<Episode>(false, []);
  dataSource_seasons: MatTableDataSource<Episode>;
  displayedColumns_seasons = ['id', 'seasonNumber', 'select'];

  seasons:        Episode[];

  selectedSeason: Episode;

  constructor(public  dialog: MatDialog,
              private router: Router,
              private changeDetectorRefs: ChangeDetectorRef,
              private episodeService: EpisodeService,
              private dataService: DataService) { }

  ngOnInit() {
    this.getAllSeasons();
  }

  getAllSeasons(): void {
    this.episodeService.getSeasons()
      .then( items => {
        this.seasons = items;
        this.refreshSeasons();
      });
  }

  // getEpisodesForSelectedSeason(): void {
  //   this.episodeService.getEpisodesForSeasons(this.selectedSeason.seasonNumber)
  //     .then( items => {
  //       this.episodes = items;
  //       this.refreshEpisodes();
  //     });
  // }

  getSeason(): void {
    const index = this.getSelectedSeasonIndex();
    if (index !== -1) {
      this.setSeason(index);
      this.saveData();
      // this.getEpisodesForSelectedSeason();
      this.router.navigate(['admin/seasons/episodes']);
    }
  }

  setSeason(index: number): void {
    this.selectedSeason = this.seasons[index];
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

  private getSelectedSeasonIndex() {
    if (this.selection_seasons.selected.length === 0) {
      return -1;
    } else {
      return this.seasons.indexOf(this.selection_seasons.selected[0]);
    }
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

  // private refreshEpisodes() {
  //   this.dataSource_episodes = new MatTableDataSource<Episode>(this.episodes);
  //   this.changeDetectorRefs.detectChanges();
  // }

  saveData() {
    this.dataService.season = this.selectedSeason;
  }
}
