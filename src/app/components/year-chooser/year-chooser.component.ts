import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-chooser',
  templateUrl: './year-chooser.component.html',
  styleUrls: ['./year-chooser.component.css']
})
export class YearChooserComponent implements OnInit {
  year = '';
  constructor() { }

  ngOnInit() {
  }

}
