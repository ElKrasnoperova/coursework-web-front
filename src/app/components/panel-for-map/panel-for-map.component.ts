import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Episode} from '../../model/Episode';
import {Location} from '../../model/Location';
import {LocationService} from '../../service/location.service';
import {Character} from '../../model/Character';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-panel-for-map',
  templateUrl: './panel-for-map.component.html',
  styleUrls: ['./panel-for-map.component.css']
})
export class PanelForMapComponent implements OnInit {

  @Output() episodeSelected: EventEmitter<Episode> = new EventEmitter<Episode>();


  constructor() {
  }

  ngOnInit() {
  }

  passData(episode: Episode): void {
    this.episodeSelected.emit(episode);
  }
}
