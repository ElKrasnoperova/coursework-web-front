import {Component, OnInit} from '@angular/core';
import {Language} from '../../../model/Language';
import {MatDialogRef} from '@angular/material';
import {LanguageService} from '../../../service/language.service';
import {AdminAddLanguageDialogComponent} from './add-language-dialog';
import {Photo} from '../../../model/Photo';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {PrincipalService} from '../../../service/principal.service';

@Component({
  selector: 'app-edit-language-dialog',
  templateUrl: 'edit-language-dialog.html',
  styleUrls: ['../admin-game-page.component.css']
})
export class AdminEditLanguageDialogComponent implements OnInit {
  language: Language;
  updatedLanguage: Language;
  ngOnInit(): void {
    this.updatedLanguage = {...this.language};
  }
  constructor (private languageService: LanguageService,
               private dialogRef: MatDialogRef<AdminAddLanguageDialogComponent>,
               private errorHandler: ErrorHandler,
               principalService: PrincipalService) {
  }
  updateLanguage(): void {
    this.languageService.updateLanguage(this.updatedLanguage)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }

  setPhoto(photo: Photo): void {
    this.updatedLanguage.photo = photo;
  }
}
