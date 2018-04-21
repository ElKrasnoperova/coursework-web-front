import {Component, OnInit} from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../settings-page/settings-page.component';
import { MatDialog,  MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';

import { AdminCharactersAddDialogComponent } from './admin-characters-add';
import {AdminCharactersEditDialogComponent} from './admin-characters-edit';


@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-characters-page.component.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'birthYear', 'faith', 'organisation', 'select'];
  dataSource: any;
  selection = new SelectionModel<Character>(true, []);
  constructor(public dialog: MatDialog, private characterService: CharacterService) {
  }
  characters: Character[];
  newCharacter = new Character;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .then( items => {
        this.characters = items;
        this.dataSource = new MatTableDataSource<Character>(this.characters);
      });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AdminCharactersAddDialogComponent, {
      height: '80%', width: '35%',
      data: {
        name:         this.newCharacter.name,
        birthYear:    this.newCharacter.birthYear,
        faith:        this.newCharacter.faith,
        organization: this.newCharacter.organization,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Add Dialog was closed, result: ${result}`);
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(AdminCharactersEditDialogComponent, {
      height: '80%', width: '35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Edit Dialog result: ${result}`);
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log('page char ' + result.name + ' ' + result.birthYear);
    });
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
