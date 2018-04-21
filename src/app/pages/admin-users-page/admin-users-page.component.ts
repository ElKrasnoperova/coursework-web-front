import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'rights', 'select'];
  dataSource = new MatTableDataSource<User>(USERS_DATA);
  selection = new SelectionModel<User>(false, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getSelectedItem() {
    if (this.selection.selected.length === 0) {
      return -1;
    } else {
      return this.selection.selected[0].id;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}

export interface User {
  name: string;
  id: number;
  email: string;
  rights: boolean;
}

const USERS_DATA: User[] = [
  {id: 1, name: 'Имя1', email: 'email1', rights: false},
  {id: 2, name: 'Имя2', email: 'email2', rights: true},
  {id: 3, name: 'Имя3', email: 'email3', rights: false},
];
