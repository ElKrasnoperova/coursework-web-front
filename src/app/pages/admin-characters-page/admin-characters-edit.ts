import {Component, Inject, OnInit} from '@angular/core';
import {AdminCharactersAddDialogComponent} from './admin-characters-add';
import {CharacterService} from '../../service/character.service';
import {Character} from '../../model/Character';
import {MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-character-edit-dialog',
  templateUrl: './admin-characters-edit.html',
  styleUrls: ['./admin-characters-page.component.css']
})
export class AdminCharactersEditDialogComponent implements OnInit {
  character: Character;
  updatedCharacter: Character;
  selectedFile: string = null;
  disabled = true;
  ngOnInit(): void {
    this.updatedCharacter = {...this.character};
  }
  constructor(private characterService: CharacterService,
              private dialogRef: MatDialogRef<AdminCharactersAddDialogComponent>,
              private http: HttpClient) {
  }
  updateCharacter(): void {
    this.characterService.updateCharacter(this.updatedCharacter)
      .then(response => {
        this.dialogRef.close(response);
      });
  }
  getFilePath(event) {
    this.selectedFile = event.target.value;
    this.disabled = false;
    return this.selectedFile;
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
