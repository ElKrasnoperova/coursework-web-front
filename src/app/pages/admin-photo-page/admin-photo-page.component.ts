import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Photo} from '../../model/Photo';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {isBoolean} from 'util';
import {AdminPhotoAddDialogComponent} from './add-photo-dialog';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';
import {PrincipalService} from '../../service/principal.service';
import {PhotoService} from '../../service/photo.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';
import {PreviewPhotoDialogComponent} from './preview-photo-dialog.component';

@Component({
  selector: 'app-admin-photo-page',
  templateUrl: './admin-photo-page.component.html',
  styleUrls: ['./admin-photo-page.component.css']
})
export class AdminPhotoPageComponent implements OnInit {
  displayedColumns = ['id', 'path', 'select'];
  dataSource = new  MatTableDataSource<Photo>();
  selection = new SelectionModel<Photo>(false, []);

  photos: Photo[];

  constructor( public  dialog: MatDialog,
               private changeDetectorRefs: ChangeDetectorRef,
               private photoService: PhotoService,
               private errorHandler: ErrorHandler,
               public principalService: PrincipalService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos()
      .then( items => {
        this.photos = items;
      })
      .then(() => this.refresh())
      .catch(this.errorHandler.handleResponse);
  }

  add() {
    this.openAddDialog();
  }

  openAddDialog(): void {
    this.dialog
      .open(AdminPhotoAddDialogComponent, {
        height: '50%', width: '40%'
      })
      .afterClosed().subscribe(result => {
        if (result && !isBoolean(result)) {
          console.log(result);
          this.photos.push(result);
          this.refresh();
        }
    });
  }

  getSelectedItemIndex(): number {
    if (this.selection.selected.length === 0) {
      return -1;
    } else {
      return this.photos.indexOf(this.selection.selected[0]);
    }
  }

  delete(): void {
    const index = this.getSelectedItemIndex();
    if (index !== -1) { this.openDeleteDialog(index); }
  }

  openDeleteDialog(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '20%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.photoService.deletePhoto(this.photos[index].id)
            .then(() => {
              this.photos.splice(index, 1);
              this.refresh();
            })
            .catch(err => {
              this.errorHandler.handleError(err);
            });
      }
    });
  }

  openPreviewDialog(): void {
    const index = this.getSelectedItemIndex();
    if (index !== -1) {
      const dialogRef = this.dialog
        .open(PreviewPhotoDialogComponent, {
          height: '20%'
        });
      dialogRef.componentInstance.photo = this.photos[index];
    }
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource<Photo>(this.photos);
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

}

// const PHOTOS: Photo[] = [
//   {id: 1, path: 'asd'},
//   {id: 2, path: 'asffdsad'},
//   {id: 3, path: 'afafssf'}
// ];
