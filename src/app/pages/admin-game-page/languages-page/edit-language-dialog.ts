import {Component, OnInit} from '@angular/core';
import {Language} from '../../../model/Language';
import {MatDialogRef} from '@angular/material';
import {LanguageService} from '../../../service/language.service';
import {AdminAddLanguageDialogComponent} from './add-language-dialog';

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
               private dialogRef: MatDialogRef<AdminAddLanguageDialogComponent>) {
  }
  updateLanguage(): void {
    this.languageService.updateLanguage(this.updatedLanguage)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
}
