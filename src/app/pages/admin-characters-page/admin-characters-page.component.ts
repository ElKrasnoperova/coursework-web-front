import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../settings-page/settings-page.component';
import { MatDialog,  MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';

import { AdminCharactersAddDialogComponent } from './admin-characters-add';
import {AdminCharactersEditDialogComponent} from './admin-characters-edit';


@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-characters-page.component.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'birthYear', 'faith', 'organisation', 'select'];
  dataSource: any;
  selection = new SelectionModel<Character>(false, []);
  constructor(public dialog: MatDialog,
              private characterService: CharacterService,
              private changeDetectorRefs: ChangeDetectorRef) {
  }
  characters: Character[];

  getSelectedItem() {
    if (this.selection.selected.length === 0) {
      return -1;
    } else {
      return this.selection.selected[0].id;
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

  edit(): void {                                                                              // TODO get selected characters
    // let index_from_this.characters =
    // this.openEditDialogForCharacter(index);
  }

  delete(): void {
      this.openDeleteDialog();
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

  openEditDialogForCharacter(index: number): any {
    this.dialog
      .open(AdminCharactersEditDialogComponent, {
        height: '80%', width: '35%',
        data: {
          character: this.characters[index]
        }
      })
      .afterClosed().subscribe(result => {
        console.log(`Edit Dialog result: ${result}`);
        console.log(`got updated ${result.name}`);
        this.characters[index] = result;
        this.refresh();
      });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log('page char ' + result.name + ' ' + result.birthYear);
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
