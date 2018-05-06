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

  checked: boolean;

  // @Input()  activeLocation:  number;
  // @Input()  character:  Character;
  // @Output() locationsLoaded: EventEmitter<Location[]> = new EventEmitter<Location[]>();

  @Output() episodeSelected: EventEmitter<Episode> = new EventEmitter<Episode>();

  locations: Location[];
  // dataService: DataService;

  constructor(public dataService: DataService) {
    // this.dataService = dataServ;
  }

  ngOnInit() {
  }

  passData(episode: Episode): void {
    this.episodeSelected.emit(episode);
  }

  // passData(): void {
  //   this.locationsLoaded.emit(this.locations);
  // }

  // loadLocationsForEpispde(episode: Episode) {
  //   if (episode) {
  //     this.locationService.getMapLocations(episode)
  //       .then(items => {
  //         this.locations = items;
  //         this.passData();
  //       });
  //   }
  // }
  //
  // test() {
  //   console.log(this.activeLocation);
  //   console.log(this.character);
  // }
}
