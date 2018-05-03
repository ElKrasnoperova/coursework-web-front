import {Component, OnInit, Output} from '@angular/core';
import {Episode} from '../../../model/Episode';
import {Location} from '../../../model/Location';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-choose-episode-page',
  templateUrl: './choose-episode-page.component.html',
  styleUrls: ['./choose-episode-page.component.css']
})
export class ChooseEpisodePageComponent implements OnInit {

  location: Location;
  isSelected = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  setEpisode(episode: Episode) {
    this.location.episode = episode;
    this.isSelected = true;
  }

  goNext() {
    if (this.isSelected) {
      console.log('goNext');
      this.router.navigate(['admin/location/2']);
    }
  }
}
