import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {Language} from '../../../model/Language';
import {Http} from '@angular/http';
import {MatDialogRef} from '@angular/material';
import {Photo} from '../../../model/Photo';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {PrincipalService} from '../../../service/principal.service';

@Component({
  selector: 'app-add-language-dialog',
  templateUrl: 'add-language-dialog.html',
  styleUrls: ['../admin-game-page.component.css']
})
export class AdminAddLanguageDialogComponent implements OnInit {
  newLanguage: Language;
  constructor(private  http: Http,
              private dialogRef: MatDialogRef<AdminAddLanguageDialogComponent>,
              private languageService: LanguageService,
              private errorHandler: ErrorHandler,
              principalService: PrincipalService) {
    this.newLanguage = new Language();
  }
  ngOnInit(): void {
  }
  addLanguage(): void {
    this.languageService.createLanguage(this.newLanguage)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  setPhoto(photo: Photo) {
    this.newLanguage.photo = photo;
  }
}
