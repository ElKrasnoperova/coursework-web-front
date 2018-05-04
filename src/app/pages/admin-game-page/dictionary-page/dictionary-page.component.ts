import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Language} from '../../../model/Language';
import {SelectionModel} from '@angular/cdk/collections';
import {Word} from '../../../model/Word';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {WordService} from '../../../service/word.service';
import {LanguageService} from '../../../service/language.service';
import {AdminEditWordDialogComponent} from './edit-word-dialog';
import {ConfirmActionDialogComponent} from '../../../components/confirm-action/confirm-action-dialog';
import {AdminAddWordDialogComponent} from './add-word-dialog';
import {DataServise} from '../../../service/data.servise';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  selectedLanguage: Language;

  selection_words = new SelectionModel<Word>(false, []);
  dataSource_words: MatTableDataSource<Word>;
  displayedColumns_words = ['id', 'translation', 'word', 'select'];

  words: Word[];

  constructor(public dialog: MatDialog,
              public dataService: DataServise,
              private changeDetectorRefs: ChangeDetectorRef,
              private languageService: LanguageService,
              private wordService: WordService) {
    this.selectedLanguage = new Language();
  }

  getSelectedWordIndex(): number {
    if (this.selection_words.selected.length === 0) {
      return -1;
    } else {
      return this.words.indexOf(this.selection_words.selected[0]);
    }
  }

  getWords(): void {
    this.wordService.getWords(this.selectedLanguage)
      .then(items => {
        this.words = items;
        this.refreshWords();
      });
  }

  deleteWord(): void {
    const index = this.getSelectedWordIndex();
    if (index !== -1) { this.openDeleteDialogForWord(index); }
  }

  openDeleteDialogForWord(index: number) {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.wordService.deleteWord(this.words[index])
          .then(() => {
            this.words.splice(index, 1);
            this.refreshWords();
          });
      }
    });
  }

  editWord(): void {
    const index = this.getSelectedWordIndex();
    if (index !== -1) { this.openEditDialogForWord(index); }
  }

  openEditDialogForWord(index: number) {
    const dialogRef = this.dialog
      .open(AdminEditWordDialogComponent, {
        height: '35%', width: '35%'
      });
    dialogRef.componentInstance.word = this.words[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.words[index] = result;
        this.refreshWords();
      }
    });
  }

  addWord(): void {
    this.openAddDialogForWord();
  }

  openAddDialogForWord() {
    const dialogRef = this.dialog
      .open(AdminAddWordDialogComponent, {
        height: '35%', width: '35%'
      });
    dialogRef.componentInstance.translationLang = this.selectedLanguage;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.words.push(result);
        this.refreshWords();
      }
    });
  }

  refreshWords(): void {
    this.dataSource_words = new MatTableDataSource<Word>(this.words);
    this.changeDetectorRefs.detectChanges();
  }

  isAllWordsSelected() {
    const numSelected = this.selection_words.selected.length;
    const numRows = this.dataSource_words.data.length;
    return numSelected === numRows;
  }
  masterWordsToggle() {
    this.isAllWordsSelected() ?
      this.selection_words.clear() :
      this.dataSource_words.data.forEach(row => this.selection_words.select(row));
  }

  ngOnInit() {
    this.selectedLanguage = this.dataService.language;
    console.log(this.selectedLanguage);
    this.getWords();
  }

}
