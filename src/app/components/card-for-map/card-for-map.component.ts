
import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-card-for-map',
  templateUrl: './card-for-map.component.html',
  styleUrls: ['./card-for-map.component.css']
})
export class CardForMapComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
