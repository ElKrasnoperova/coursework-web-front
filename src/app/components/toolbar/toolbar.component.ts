import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatTabChangeEvent} from '@angular/material';
import {UserService} from '../../service/user.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';
import {ConfirmActionDialogComponent} from '../confirm-action/confirm-action-dialog';
import {PrincipalService} from '../../service/principal.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private router: Router,
              public principalService: PrincipalService) {}

  ngOnInit() {
    console.log(this.router.url);
  }
}
