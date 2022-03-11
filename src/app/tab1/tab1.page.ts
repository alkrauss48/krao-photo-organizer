import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  letters = 'laylaisawesome';
  counter = 0;
  activeLetter = '';

  constructor(public toastController: ToastController) {}

  buttonClicked() {
    this.activeLetter = this.letters.substring(this.counter,(this.counter + 1));
    this.counter = this.counter + 1;
    if (this.counter > this.letters.length - 1) {
        this.counter = 0;
    }
  }

  async toastButton() {
    const toast = await this.toastController.create({
      message: 'You\'ve been toasted!',
      duration: 2000
    });
    toast.present();
  }
}
