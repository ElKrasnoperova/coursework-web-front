import { Component, OnInit } from '@angular/core';
import {DialogOverviewExampleDialogComponent} from '../settings-page/settings-page.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-characters-page.component.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersPageComponent implements OnInit {
  typesOfShoes = ['Дейнерис Таргариен', 'Джон Сноу', 'Санса Старк'];
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
