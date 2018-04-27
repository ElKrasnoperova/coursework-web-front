import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Photo} from '../../model/Photo';

@Component({
  selector: 'app-photo-loader',
  templateUrl: './photo-loader.component.html',
  styleUrls: ['./photo-loader.component.css']
})
export class PhotoLoaderComponent implements OnInit {
  private basePath = '../../../assets/img/';

  @Input()  photo: Photo;
  @ViewChild('preview') preview: ElementRef;

  @Output()
  photoIsChosen: EventEmitter<Photo> = new EventEmitter<Photo>();

  constructor() { }
  ngOnInit() {
    if (this.photo !== undefined ) {
      this.showPreview(this.photo.path);
    }
  }

  initPhoto(event): void {
    if (this.photo === undefined) {
      this.photo = new Photo();
    }
    const files = event.target.files;
    const file = files[0];
    if (file.type.match('image.*')) {
      const path = this.basePath + this.getFilename(event.target.value, '/');
      console.log(path);
      this.photo.path = path;
      this.showPreview(path);
      this.photoIsChosen.emit(this.photo);
    }
  }

  getFilename(fakepath: string, separator: string): string {
    const start = fakepath.lastIndexOf(separator) + 1;
    const  end = fakepath.length;
    return fakepath.substring(start, end);
  }

  showPreview(fullpath: string) {
    this.preview.nativeElement.setAttribute('src', fullpath);
  }
}
