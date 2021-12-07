import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Favoritado com sucesso!.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: 'Favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }


}
