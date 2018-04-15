import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';


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


  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-confirm-of-action-dialog',
  templateUrl: 'confirm-action-dialog.html',
})
export class DialogOverviewExampleDialogComponent {
}
