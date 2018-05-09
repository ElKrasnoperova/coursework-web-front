import {Component, OnInit} from '@angular/core';
import {PrincipalService} from '../../service/principal.service';

@Component({
  selector: 'app-confirm-of-action-dialog',
  templateUrl: 'confirm-action-dialog.html',
})
export class ConfirmActionDialogComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public principalService: PrincipalService) {
  }
}
