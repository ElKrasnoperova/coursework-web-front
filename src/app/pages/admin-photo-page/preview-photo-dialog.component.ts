import { Component, OnInit } from '@angular/core';
import {Photo} from '../../model/Photo';
import {AdminCharactersAddDialogComponent} from '../admin-characters-page/admin-characters-add';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-preview-photo-dialog',
  templateUrl: './preview-photo-dialog.component.html',
  styleUrls: ['./admin-photo-page.component.css']
})
export class PreviewPhotoDialogComponent implements OnInit {

  photo: Photo;

  ngOnInit(): void {
  }
  constructor(private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>) {
  }
}
