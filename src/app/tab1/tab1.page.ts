import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  letters = 'laylaisawesome';
  activeLetter = '';
  counter: number = 0;
  showButton: boolean = false;
  buttonText: string = 'button text';

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async presentAlert(header: string, subheader: string = "", message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  ionViewDidEnter() {
    const today = new Date();
    if (today.getMonth()+1 == 3 && today.getDate() == 12) {
      this.presentAlert("3/12", "", "Happy belated birthday, Layla!");
    }
  }

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
