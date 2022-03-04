import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  counter = 0;

  constructor() {}

  buttonClicked() {
    console.log('clicked');
    this.counter = this.counter + 1;
  }
}
