import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatTabChangeEvent} from '@angular/material';
import {UserService} from '../../service/user.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';
import {ConfirmActionDialogComponent} from '../confirm-action/confirm-action-dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private event: MatTabChangeEvent;
  // tabLinks = [
  //   {label: 'Вход', link: 'login'},
  //   {label: 'Персонажи', link: 'characters'},
  //   {label: 'Карта', link: 'map'},
  //   {label: 'Игры', link: 'games'}
  // ];

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
  }

  // openExitDialog() {
  //   console.log('attempt logout');
  //   this.dialog
  //     .open(ConfirmActionDialogComponent, {
  //       height: '25%', width: '31%'
  //     })
  //     .afterClosed().subscribe(result => {
  //       if (result) {
  //         this.userService.logout()
  //           .catch( err => this.errorHandler.handleError(err));}
  //     });
  // }
}
