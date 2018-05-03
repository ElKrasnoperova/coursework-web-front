import { Component, OnInit } from '@angular/core';
import {Word} from '../../model/Word';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-answer-list-page',
  templateUrl: './answer-list-page.component.html',
  styleUrls: ['./answer-list-page.component.css']
})
export class AnswerListPageComponent implements OnInit {

  displayedColumns = ['translation', 'word'];

  words: Word[];
  results: boolean[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log( this.route.snapshot.paramMap );
  }

}

