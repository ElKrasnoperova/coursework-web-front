import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmActionDialogComponent} from '../confirm-action/confirm-action-dialog';

@Component({
  selector: 'app-location-of-character',
  templateUrl: './location-of-character.component.html',
  styleUrls: ['./location-of-character.component.css']
})
export class LocationOfCharacterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit() {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      height: '55%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog-edit',
  templateUrl: 'dialog-edit.html',
  styleUrls: ['location-of-character.component.css']
})
export class DialogEditComponent {}
