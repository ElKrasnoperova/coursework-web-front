import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';
import {ErrorHandler} from '../../service/error-handler/error.handler';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  user: User;
  updatedUser: User;

  hide = true;
  constructor(public dialog: MatDialog,
              private userService: UserService,
              private errorHandler: ErrorHandler) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.userService.getUser()
      .then( user => this.user = user)
      .then(() => this.updatedUser = {...this.user})
      .catch(this.errorHandler.handleError);
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      height: '25%'
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.userService.updateUser(this.updatedUser)
            .then(user => this.user = user)
            .then(() => this.updatedUser = {...this.user})
            .catch(this.errorHandler.handleError);
        } else {
          this.updatedUser = {...this.user};
        }
    });
  }
}


