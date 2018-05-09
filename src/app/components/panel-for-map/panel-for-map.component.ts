import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Episode} from '../../model/Episode';
import {PrincipalService} from '../../service/principal.service';

@Component({
  selector: 'app-panel-for-map',
  templateUrl: './panel-for-map.component.html',
  styleUrls: ['./panel-for-map.component.css']
})
export class PanelForMapComponent implements OnInit {

  @Output() episodeSelected: EventEmitter<Episode> = new EventEmitter<Episode>();

  constructor(public principalService: PrincipalService) {
  }

  ngOnInit() {
  }

  passData(episode: Episode): void {
    this.episodeSelected.emit(episode);
  }
}
