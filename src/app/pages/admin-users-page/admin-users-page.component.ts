import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {User} from '../../model/User';
import {AdminService} from '../../service/admin.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'login', 'email', 'telegram', 'isAdmin', 'select'];
  dataSource: MatTableDataSource<User>;
  selection = new SelectionModel<User>(false, []);

  users: User[];

  constructor(private userService: AdminService,
              private changeDetectorRefs: ChangeDetectorRef,
              private errorHandler: ErrorHandler) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .then( items => {
        this.users = items;
        this.refresh();
        console.log(this.users);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  promoteToAdmin(): void {
    const index = this.getSelectedUserIndex();
    if (index !== -1) {
      this.userService.addAdmin(this.users[index].login)
        .then(result => {
          this.users[index] = result;
          this.refresh();
        })
        .catch(err => {
          this.errorHandler.handleError(err);
        });
    }
  }

  demote(): void {
    const index = this.getSelectedUserIndex();
    if (index !== -1) {
      this.userService.removeAdmin(this.users[index].login)
        .then(result => {
          this.users[index] = result;
          console.log('devoted');
          this.refresh();
        })
        .catch(err => {
          this.errorHandler.handleError(err);
        });
    }
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.changeDetectorRefs.detectChanges();
  }

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

  getSelectedUserIndex(): number {
    if (this.selection.selected.length === 0) {
      return -1;
    } else {
      return this.users.indexOf(this.selection.selected[0]);
    }
  }

  getIconForResult(result: boolean): string {
    console.log(result);
    return result === true ? 'tag_faces' : null;
  }
}
