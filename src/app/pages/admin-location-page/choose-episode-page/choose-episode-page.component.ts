import {Component, OnInit, Output} from '@angular/core';
import {Episode} from '../../../model/Episode';
import {Location} from '../../../model/Location';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {DataService} from '../../../service/data.service';

@Component({
  selector: 'app-choose-episode-page',
  templateUrl: './choose-episode-page.component.html',
  styleUrls: ['./choose-episode-page.component.css']
})
export class ChooseEpisodePageComponent implements OnInit {
  isSelected;

  location: Location;

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.location = new Location();
  }

  setEpisode(episode: Episode) {
    if (episode) {
      this.location.episode = episode;
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }

  goNext() {
    if (this.isSelected) {
      this.dataService.location = this.location;
      this.router.navigate(['admin/character_locations/episodes/places']);
    }
  }
}
