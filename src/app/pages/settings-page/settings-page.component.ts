import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {User} from '../../model/User';
import {isBoolean} from 'util';
import {UserService} from '../../service/user.service';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  user: User;
  hide = true;
  constructor(public dialog: MatDialog,
              private userService: UserService) { }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    // this.userService.getUser()
    // this.user = result
    this.user = new User();
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      height: '25%'
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // update
        }
    });
  }
}


