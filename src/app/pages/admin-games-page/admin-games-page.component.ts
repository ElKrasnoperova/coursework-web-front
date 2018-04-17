import { Component, OnInit } from '@angular/core';
import {DialogOverviewExampleDialogComponent} from '../settings-page/settings-page.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-games-page.component.html',
  styleUrls: ['./admin-games-page.component.css']
})
export class AdminGamesPageComponent implements OnInit {
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
    const dialogRef = this.dialog.open(AdminGamesEditDialogComponent, {
      height: '80%', width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AdminGamesAddDialogComponent, {
      height: '80%', width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component ({
  selector: 'app-admin-games-edit',
  templateUrl: 'admin-games-edit.html',
  styleUrls: ['./admin-games-page.component.css']
})
export class AdminGamesEditDialogComponent {}

@Component ({
  selector: 'app-admin-games-add',
  templateUrl: 'admin-games-add.html',
  styleUrls: ['./admin-games-page.component.css']
})
export class AdminGamesAddDialogComponent {
}
