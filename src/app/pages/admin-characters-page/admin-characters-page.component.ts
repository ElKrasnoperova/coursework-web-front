import { Component, OnInit } from '@angular/core';
import {DialogOverviewExampleDialogComponent} from '../settings-page/settings-page.component';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-characters-page.component.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersPageComponent implements OnInit {
  displayedColumns = ['position', 'name', 'year', 'mother', 'father', 'faith', 'organisation', 'select'];
  dataSource = new MatTableDataSource<Character>(CHARACTERS_DATA);
  selection = new SelectionModel<Character>(true, []);
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(AdminCharactersEditDialogComponent, {
      height: '80%', width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AdminCharactersAddDialogComponent, {
      height: '80%', width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

@Component ({
  selector: 'app-admin-characters-edit',
  templateUrl: 'admin-characters-edit.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersEditDialogComponent {}

@Component ({
  selector: 'app-admin-chracters-add',
  templateUrl: 'admin-characters-add.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersAddDialogComponent {
}

export interface Character {
  name: string;
  position: number;
  year: number;
  mother: string;
  father: string;
  faith: string;
  organisation: string;
}

const CHARACTERS_DATA: Character[] = [
  {position: 1, name: 'Джон Сноу', year: 789, mother: 'Неизвестно', father: 'Эддард Старк', faith: 'Семеро', organisation: 'Дозор' }
];
