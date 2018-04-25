import {Component, OnInit} from '@angular/core';

import { Character } from '../../model/Character';
import { CharacterService } from '../../service/character.service';
import {MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-admin-characters-add-dialog',
  templateUrl: './admin-characters-add.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersAddDialogComponent implements OnInit {
  selectedFile: string = null;
  newCharacter: Character;
  disabled = true;
  ngOnInit(): void {
    this.newCharacter = new Character();
  }
  constructor(private characterService: CharacterService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>,
              private http: HttpClient) {
  }
  createCharacter(): void {
    this.characterService.createCharacter(this.newCharacter)
      .then(response => {
        this.dialogRef.close(response);
      });
  }

  getFilePath(event) {
    this.selectedFile = event.target.value;
    this.disabled = false;
    // return this.selectedFile;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile);
    this.http.post('', fd)
      .subscribe( res => {
        console.log(res);
      });
  }
}
