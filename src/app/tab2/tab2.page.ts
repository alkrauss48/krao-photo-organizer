import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // photos: string[] = ["assets/bidoof1.jpg", "assets/bidoof2.jpg"];
  photos: any = [{
    path: "assets/bidoof1.jpg",
    keep: false,
  }, {
    path: "assets/bidoof2.jpg",
    keep: false,
  }];
  photoActive: number = 0;
  photo: any = this.photos[this.photoActive];
  // photoKeep: boolean = false;

  constructor() {}

  photoClicked() {
    this.photoActive = (this.photoActive == 0 ? 1 : 0);
    this.photo = this.photos[this.photoActive];
  }

  keep() {
    this.photo.keep = !this.photo.keep;
  }
}
