import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent implements OnInit {
  displayedColumns = ['position', 'name', 'email', 'rights', 'select'];
  dataSource = new MatTableDataSource<User>(USERS_DATA);
  selection = new SelectionModel<User>(true, []);

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


  constructor() { }

  ngOnInit() {
  }
}

export interface User {
  name: string;
  position: number;
  email: string;
  rights: boolean;
}

const USERS_DATA: User[] = [
  {position: 1, name: 'Имя1', email: 'email1', rights: false},
  {position: 2, name: 'Имя2', email: 'email2', rights: true},
  {position: 3, name: 'Имя3', email: 'email3', rights: false},
];
