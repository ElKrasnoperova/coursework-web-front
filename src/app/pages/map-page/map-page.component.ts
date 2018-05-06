import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Episode} from '../../model/Episode';
import {LocationService} from '../../service/location.service';
import {Location} from '../../model/Location';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  @ViewChild('iconLayer') iconContainer: ElementRef;
  iconLayer: HTMLElement;

  locations: Location[];

  constructor(private renderer: Renderer2,
              private dataService: DataService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.iconLayer = this.renderer.createElement('div');
  }

  getCharactersForEpisode(episode: Episode) {
    this.clearLayer();
    this.resetCharacterInfo();
    if (episode) {
      this.locationService.getMapLocations(episode)
        .then(items => {
          this.locations = items;
          this.doMagic();
        });
    }
  }

  addIcon(locationIndex: number, x: number, y: number, src: string) {

    const img = this.renderer.createElement('img');
    img.src = src;

    const activeIconListener = function () {
      const index = event.srcElement.getAttribute('id');
      this[0].character = this[1][index].character;
      this[2].addClass(event.srcElement, 'front');
    }.bind([this.dataService, this.locations, this.renderer]);

    const inactiveIconListener = function() {
      this[0].removeClass(event.srcElement, 'front');
    }.bind([this.renderer]);

    img.addEventListener('click', activeIconListener);
    img.addEventListener('mouseenter', activeIconListener);
    img.addEventListener('mouseleave', inactiveIconListener);

    const crutch = document.createElement('style');
    crutch.type = 'text/css';
    crutch.innerHTML = `.crutch${locationIndex} {position: absolute; top: ${y}px; left: ${x}px;}`;
    this.renderer.appendChild(this.iconLayer, crutch);

    this.renderer.addClass(img, `crutch${locationIndex}`);
    this.renderer.addClass(img, 'icon');
    this.renderer.addClass(img, 'icon-back');

    this.renderer.setAttribute(img, 'id', `${locationIndex}`);

    this.renderer.appendChild(this.iconLayer, img);
    this.renderer.appendChild(this.iconContainer.nativeElement, this.iconLayer);
  }

  doMagic(): void {
    this.locations.forEach( (location, index) => {
      const place = location.place;
      const photo = location.character.photo;
      const img = photo ? photo.path : '';
      this.addIcon(index, place.x, place.y, img);
    });
  }

  clearLayer() {
    this.iconLayer.innerHTML = '';
  }

  resetCharacterInfo(): void {
    this.dataService.character = null;
  }
}
