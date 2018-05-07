import { Component, OnInit } from '@angular/core';
import {Photo} from '../../model/Photo';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdminCharactersAddDialogComponent} from '../admin-characters-page/admin-characters-add';
import {isBoolean} from "util";
import {AdminPhotoAddDialogComponent} from './add-photo-dialog';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';

@Component({
  selector: 'app-admin-photo-page',
  templateUrl: './admin-photo-page.component.html',
  styleUrls: ['./admin-photo-page.component.css']
})
export class AdminPhotoPageComponent implements OnInit {
  displayedColumns = ['id', 'path', 'select'];
  dataSource = new  MatTableDataSource<Photo>(PHOTOS);
  selection = new SelectionModel<Photo>(false, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor( public  dialog: MatDialog) { }

  ngOnInit() { }

  openAddDialog(): void {
    this.dialog
      .open(AdminPhotoAddDialogComponent, {
        height: '50%', width: '40%'
      });
  }

  openDeleteDialog(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '20%'
      });
    }

}

const PHOTOS: Photo[] = [
  {id: 1, path: 'asd'},
  {id: 2, path: 'asffdsad'},
  {id: 3, path: 'afafssf'}
];
