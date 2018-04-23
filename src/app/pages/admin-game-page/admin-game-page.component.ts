import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdminAddLanguageDialogComponent} from './add-language-dialog';
import {AdminEditLanguageDialogComponent} from './edit-language-dialog';
import {AdminDeleteLocationDialogComponent} from '../admin-location-page/delete-location-dialog';

@Component({
  selector: 'app-admin-game-page',
  templateUrl: './admin-game-page.component.html',
  styleUrls: ['./admin-game-page.component.css']
})
export class AdminGamePageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  displayedColumns = ['id', 'name', 'select'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(false, []);

  /** Whether the number of selected elements matches the total number of rows. */
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

  openDialogEditLanguage() {
    this.dialog
      .open(AdminEditLanguageDialogComponent, {
        height: '35%', width: '35%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  openDialogAddLanguage() {
    this.dialog
      .open(AdminAddLanguageDialogComponent, {
        height: '35%', width: '35%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  openDialogDeleteLanguage() {
    this.dialog
      .open(AdminDeleteLocationDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
    });
  }

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

export interface Element {
  name: string;
  id: number;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Валирийский'},
  {id: 2, name: 'Дотракийский'},
];
