import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  hide = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  saveChanges(): void {
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


