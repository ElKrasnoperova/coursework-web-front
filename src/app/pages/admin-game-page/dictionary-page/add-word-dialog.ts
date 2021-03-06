import {Component, OnInit} from '@angular/core';
import {Language} from '../../../model/Language';
import {Http} from '@angular/http';
import {MatDialogRef} from '@angular/material';
import {WordService} from '../../../service/word.service';
import {Word} from '../../../model/Word';
import {ErrorHandler} from '../../../service/error-handler/error.handler';
import {PrincipalService} from '../../../service/principal.service';

@Component({
  selector: 'app-add-word-dialog',
  templateUrl: 'add-word-dialog.html',
  styleUrls: ['../admin-game-page.component.css']
})
export class AdminAddWordDialogComponent implements OnInit {
  newWord: Word;
  translationLang: Language;
  constructor(private http: Http,
              private dialogRef: MatDialogRef<AdminAddWordDialogComponent>,
              private wordService: WordService,
              private errorHandler: ErrorHandler,
              principalService: PrincipalService) {
    this.newWord = new Word();
  }
  ngOnInit(): void {
  }
  addWord(): void {
    this.newWord.translationLang = this.translationLang;
    this.wordService.createWord(this.newWord)
      .then(response => {
        this.dialogRef.close(response);
      })
      .catch(err => {
        this.errorHandler.handleError(err);
      });
  }
}
