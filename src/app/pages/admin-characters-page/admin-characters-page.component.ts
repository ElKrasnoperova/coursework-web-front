import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MatDialog,  MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';

import { AdminCharactersAddDialogComponent } from './admin-characters-add';
import {AdminCharactersEditDialogComponent} from './admin-characters-edit';
import {ConfirmActionDialogComponent} from '../../components/confirm-action/confirm-action-dialog';


@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-characters-page.component.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'birthYear', 'faith', 'organization', 'select'];
  dataSource: any;
  selection = new SelectionModel<Character>(false, []);
  constructor(public dialog: MatDialog,
              private characterService: CharacterService,
              private changeDetectorRefs: ChangeDetectorRef) {
  }
  characters: Character[];

  getSelectedItemIndex(): number {
    if (this.selection.selected.length === 0) {
      return -1;
    } else {
      return this.characters.indexOf(this.selection.selected[0]);
    }
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .then( items => {
        this.characters = items;
        this.refresh();
      });
  }

  add(): void {
    this.openAddDialog();
  }

  edit(): void {
    const index = this.getSelectedItemIndex();
    console.log(`selected ${index}`);
    this.openEditDialogForCharacter(index);
  }

  delete(): void {
    const index = this.getSelectedItemIndex();
    this.openDeleteDialogForCharacter(index);
  }

  openAddDialog(): void {
    this.dialog
      .open(AdminCharactersAddDialogComponent, {
        height: '80%', width: '35%'
      })
      .afterClosed().subscribe(result => {
        this.characters.push(result);
        this.refresh();
      });
  }

  openEditDialogForCharacter(index: number): void {
    console.log('open dialog for ' + this.characters[index]);
    this.dialog
      .open(AdminCharactersEditDialogComponent, {
        height: '80%', width: '35%',
        data: {
          character: this.characters[index]
        }
      })
      .afterClosed().subscribe(result => {
        if (result) {
          console.log('updating local');
          this.characters[index] = result;
          this.refresh();
        }
      });
  }

  openDeleteDialogForCharacter(index: number): void {
    this.dialog
      .open(ConfirmActionDialogComponent, {
        height: '25%'
      })
      .afterClosed().subscribe(result => {
        if (result) {
          this.characterService.deleteCharacter( this.characters[index].id )
            .then(() => {
              this.characters.splice(index, 1);
              this.refresh();
            });
        }
      });
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource<Character>(this.characters);
    this.changeDetectorRefs.detectChanges();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
