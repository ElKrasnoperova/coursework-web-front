import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatSort, MatTableDataSource} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';

import { AdminCharactersAddDialogComponent } from './admin-characters-add';
import {AdminCharactersEditDialogComponent} from './admin-characters-edit';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';
import {ErrorHandler} from '../../service/error-handler/error.handler';
import {isBoolean} from 'util';


@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-characters-page.component.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'birthYear', 'faith', 'organization', 'select', 'firstEpisode', 'lastEpisode' ];
  dataSource: MatTableDataSource<Character>;
  selection = new SelectionModel<Character>(false, []);
  constructor(public  dialog: MatDialog,
              private characterService: CharacterService,
              private changeDetectorRefs: ChangeDetectorRef,
              private errorHandler: ErrorHandler) {
  }
  characters: Character[];

  getSelectedItemIndex(): number {
    if (this.selection.selected.length === 0) {
      return -1;
    } else {
      return this.characters.indexOf(this.selection.selected[0]);
    }
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .then( items => {
        this.characters = items;
        this.refresh();
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  add(): void {
    this.openAddDialog();
  }

  edit(): void {
    const index = this.getSelectedItemIndex();
    if (index !== -1) { this.openEditDialogForCharacter(index); }
  }

  delete(): void {
    const index = this.getSelectedItemIndex();
    if (index !== -1) { this.openDeleteDialogForCharacter(index); }
  }

  openAddDialog(): void {
    this.dialog
      .open(AdminCharactersAddDialogComponent, {
        height: '80%', width: '40%'
      })
      .afterClosed().subscribe(result => {
        if (result && !isBoolean(result)) {
          console.log(result);
          this.characters.push(result);
          this.refresh();
        }
      });
  }

  openEditDialogForCharacter(index: number): void {
    const dialogRef = this.dialog
      .open(AdminCharactersEditDialogComponent, {
        height: '80%'
      });
    dialogRef.componentInstance.character = this.characters[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result && !isBoolean(result)) {
        this.characters[index] = result;
        this.refresh();
      }
    });
  }

  openDeleteDialogForCharacter(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '20%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.characterService.deleteCharacter( this.characters[index].id )
            .then(() => {
              this.characters.splice(index, 1);
              this.refresh();
            })
            .catch(err => {
              this.errorHandler.handleError(err);
            });
        }
      });
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource<Character>(this.characters);
    this.changeDetectorRefs.detectChanges();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
