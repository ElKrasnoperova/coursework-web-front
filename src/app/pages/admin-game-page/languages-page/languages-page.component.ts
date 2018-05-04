import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Language} from '../../../model/Language';
import {WordService} from '../../../service/word.service';
import {LanguageService} from '../../../service/language.service';
import {ConfirmActionDialogComponent} from '../../../components/confirm-action/confirm-action-dialog';
import {AdminAddLanguageDialogComponent} from './add-language-dialog';
import {AdminEditLanguageDialogComponent} from './edit-language-dialog';
import {Word} from '../../../model/Word';
import {Router} from '@angular/router';
import {DataServise} from '../../../service/data.servise';

@Component({
  selector: 'app-languages-page',
  templateUrl: './languages-page.component.html',
  styleUrls: ['./languages-page.component.css']
})
export class LanguagesPageComponent implements OnInit, OnDestroy {

      dataSource_words: MatTableDataSource<Word>;

      selection_languages = new SelectionModel<Language>(false, []);
      dataSource_languages: MatTableDataSource<Language>;
      displayedColumns_languages = ['id', 'name', 'select'];

      languages: Language[];
      public selectedLanguage: Language;

      words: Word[];

      constructor(public dialog: MatDialog,
        public dataService: DataServise,
        private changeDetectorRefs: ChangeDetectorRef,
        private languageService: LanguageService,
        private wordService: WordService,
        private router: Router) {
        this.selectedLanguage = new Language();
      }

      ngOnInit() {
        this.getLanguages();
      }

      getSelectedLanguageIndex(): number {
        if (this.selection_languages.selected.length === 0) {
          return -1;
        } else {
          return this.languages.indexOf(this.selection_languages.selected[0]);
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
      this.router.navigate(['admin/dictionaries/language/dictionary']);
    }
  }

  refreshWords(): void {
    this.dataSource_words = new MatTableDataSource<Word>(this.words);
    this.changeDetectorRefs.detectChanges();
  }

  getWords(): void {
    this.wordService.getWords(this.selectedLanguage)
      .then(items => {
        this.words = items;
        this.refreshWords();
      });
  }

  getDictionary(): void {
    this.setSelectedLanguage();
    this.getWords();
  }

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
        height: '31%', width: '35%'
      })
      .afterClosed().subscribe(result => {
      if (result) {
        this.languages.push(result);
        this.refreshLanguages();
      }
    });
  }

  refreshLanguages(): void {
    this.dataSource_languages = new MatTableDataSource<Language>(this.languages);
    this.changeDetectorRefs.detectChanges();
  }

  isAllLanguagesSelected() {
    const numSelected = this.selection_languages.selected.length;
    const numRows = this.dataSource_languages.data.length;
    return numSelected === numRows;
  }

  masterLanguagesToggle() {
    this.isAllLanguagesSelected() ?
      this.selection_languages.clear() :
      this.dataSource_languages.data.forEach(row => this.selection_languages.select(row));
  }

  ngOnDestroy() {
        this.dataService.language = this.selectedLanguage;
  }
}
