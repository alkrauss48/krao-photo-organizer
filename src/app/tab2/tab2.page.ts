import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  photos: string[] = ["assets/bidoof1.jpg", "assets/bidoof2.jpg"];
  photoActive: number = 0;
  photoSrc: string = this.photos[this.photoActive];

  constructor() {}

  photoClicked() {
    this.photoActive = (this.photoActive == 0 ? 1 : 0);
    this.photoSrc = this.photos[this.photoActive];
  }
}
