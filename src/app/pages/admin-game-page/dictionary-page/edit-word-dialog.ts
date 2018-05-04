import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Word} from '../../../model/Word';
import {WordService} from '../../../service/word.service';

@Component({
  selector: 'app-edit-word-dialog',
  templateUrl: 'edit-word-dialog.html',
  styleUrls: ['../admin-game-page.component.css']
})
export class AdminEditWordDialogComponent implements OnInit {
  word: Word;
  updatedWord: Word;
  ngOnInit(): void {
    this.updatedWord = {...this.word};
  }
  constructor (private wordService: WordService,
               private dialogRef: MatDialogRef<AdminEditWordDialogComponent>) {
  }
  updateWord(): void {
    this.wordService.updateWord(this.updatedWord)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
}
