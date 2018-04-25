import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdminAddLanguageDialogComponent} from './add-language-dialog';
import {AdminEditLanguageDialogComponent} from './edit-language-dialog';
import {Language} from '../../model/Language';
import {LanguageService} from '../../service/language.service';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';
import {Word} from '../../model/Word';
import {WordService} from '../../service/word.service';
import {AdminEditWordDialogComponent} from './edit-word-dialog';
import {AdminAddWordDialogComponent} from './add-word-dialog';

@Component({
  selector: 'app-admin-game-page',
  templateUrl: './admin-game-page.component.html',
  styleUrls: ['./admin-game-page.component.css']
})
export class AdminGamePageComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selection_languages = new SelectionModel<Language>(false, []);
  dataSource_languages: MatTableDataSource<Language>;
  displayedColumns_languages = ['id', 'name', 'select'];

  selection_words = new SelectionModel<Word>(false, []);
  dataSource_words: MatTableDataSource<Word>;
  displayedColumns_words = ['id', 'translation', 'word', 'select'];

  languages: Language[];
  selectedLanguage: Language;
  localLanguage: Language;

  words: Word[];

  constructor(private _formBuilder: FormBuilder,
              public dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef,
              private languageService: LanguageService,
              private wordService: WordService) {
    this.selectedLanguage = new Language();
    this.localLanguage = new Language();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getLanguages();
  }

  getSelectedLanguageIndex(): number {
    if (this.selection_languages.selected.length === 0) {
      return -1;
    } else {
      return this.languages.indexOf(this.selection_languages.selected[0]);
    }
  }

  getSelectedWordIndex(): number {
    if (this.selection_words.selected.length === 0) {
      return -1;
    } else {
      return this.words.indexOf(this.selection_words.selected[0]);
    }
  }

  getLanguages(): void {
    this.languageService.getLanguages()
      .then(items => {
        this.languages = items;
        this.refreshLanguages();
      });
  }

  setSelectedLanguage(): void {
    const index = this.getSelectedLanguageIndex();
    if (index !== -1) {
      this.selectedLanguage = this.languages[index];
    }
  }

  setLocalLanguage(language: Language): void {
    this.localLanguage = language;
  }

  getWords(): void {
    this.wordService.getWords(this.selectedLanguage)
      .then(items => {
        this.words = items;
        this.setLocalLanguage(items[0].wordLang); // :(
        this.refreshWords();
      });
  }

  getDictionary(): void {
    this.setSelectedLanguage();
    this.getWords();
  }

  // ---------------------------------------------------------------------------------------- ЯЗЫКИ ---------------------------

  deleteLanguage(): void {
    const index = this.getSelectedLanguageIndex();
    if (index !== -1) { this.openDeleteDialogForLanguage(index); }
  }

  openDeleteDialogForLanguage(index: number) {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%', width: '31%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.languageService.deleteLanguage(this.languages[index].id)
          .then(() => {
            this.languages.splice(index, 1);
            this.refreshLanguages();
          });
      }
    });
  }

  editLanguage(): void {
    const index = this.getSelectedLanguageIndex();
    if (index !== -1) { this.openEditDialogForLanguage(index); }
  }

  openEditDialogForLanguage(index: number) {
    const dialogRef = this.dialog
      .open(AdminEditLanguageDialogComponent, {
        height: '35%', width: '35%'
      });
    dialogRef.componentInstance.language = this.languages[index];
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.languages[index] = result;
        this.selectedLanguage = result;
        this.refreshLanguages();
      }
    });
  }

  addLanguage(): void {
     this.openAddDialogForLanguage();
  }

  openAddDialogForLanguage() {
    this.dialog
      .open(AdminAddLanguageDialogComponent, {
        height: '35%', width: '35%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.languages.push(result);
          this.refreshLanguages();
        }
      });
  }
  // ---------------------------------------------------------------------------------------- СЛОВА ---------------------------

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
        console.log(result);
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
    dialogRef.componentInstance.wordLang = this.localLanguage;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.words.push(result);
        this.refreshWords();
      }
    });
  }
  // --------------------------------------------------------------------------------------------------------------------------

  refreshLanguages(): void {
    this.dataSource_languages = new MatTableDataSource<Language>(this.languages);
    this.changeDetectorRefs.detectChanges();
  }

  refreshWords(): void {
    this.dataSource_words = new MatTableDataSource<Word>(this.words);
    this.changeDetectorRefs.detectChanges();
  }

  isAllSelected() {
    const numSelected = this.selection_languages.selected.length;
    const numRows = this.dataSource_languages.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection_languages.clear() :
      this.dataSource_languages.data.forEach(row => this.selection_languages.select(row));
  }
}
