import { Component, OnInit } from '@angular/core';
import {ConfirmActionDialogComponent} from '../confirm-action/confirm-action-dialog';
import {UserService} from '../../service/user.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit {

  constructor( public dialog: MatDialog,
               private userService: UserService,
               private errorHandler: ErrorHandler) { }

  ngOnInit() {
  }

  openExitDialog() {
    console.log('attempt logout');
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '20%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.userService.logout()
          .catch( err => this.errorHandler.handleError(err));
      }
    });
  }
}
