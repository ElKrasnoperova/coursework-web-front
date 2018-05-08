import {Component, OnInit} from '@angular/core';
import {Episode} from '../../model/Episode';
import {Photo} from '../../model/Photo';
import {PrincipalService} from '../../service/principal.service';
import {ErrorHandler} from '../../service/error-handler/error.handler';
import {AdminCharactersAddDialogComponent} from '../admin-characters-page/admin-characters-add';
import {MatDialogRef} from '@angular/material';
import {PhotoService} from '../../service/photo.service';

@Component({
  selector: 'app-admin-photo-add-dialog',
  templateUrl: './add-photo-dialog.html',
  styleUrls: ['./admin-photo-page.component.css']
})
export class AdminPhotoAddDialogComponent implements OnInit {

  newPhoto: Photo;

  ngOnInit(): void {
  }
  constructor(private photoService: PhotoService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>,
              private errorHandler: ErrorHandler,
              principalService: PrincipalService) {
  }
  createPhoto(): void {
    this.photoService.createPhoto(this.newPhoto)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
  setPhoto(photo: Photo): void {
    this.newPhoto = photo;
  }
}
