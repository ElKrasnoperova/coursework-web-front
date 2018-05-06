import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Word} from '../../../model/Word';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data.service';
import {MatTableDataSource} from '@angular/material';
import {Character} from '../../../model/Character';

@Component({
  selector: 'app-answer-list-page',
  templateUrl: './answer-list-page.component.html',
  styleUrls: ['./answer-list-page.component.css']
})
export class AnswerListPageComponent implements OnInit {

  dataSource: MatTableDataSource<Word>;
  displayedColumns = ['translation', 'word'];

  answers: Word[];
  results: boolean[];

  score: Number;
  defaultScore = 0.01;

  color: string;

  constructor(private router: Router,
              private dataService: DataService,
              private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.dataService.answers && this.dataService.results) {
      this.getData();
      this.initTable();
      this.setScore();
      console.log(this.score);
    } else {
      this.router.navigate(['/notFound']);
    }
  }

  getData(): void {
    this.answers = this.dataService.answers;
    this.results = this.dataService.results;
    this.dataService.answers = null;
    this.dataService.results = null;
  }

  initTable(): void {
    this.dataSource = new MatTableDataSource<Word>(this.answers);
    this.changeDetectorRefs.detectChanges();
  }

  setScore(): void {
    this.score = this.results.filter( result => result === true).length;
  }

  getIconForResult(result: boolean): string {
    return result === true ? 'done' : 'close';
  }
}

