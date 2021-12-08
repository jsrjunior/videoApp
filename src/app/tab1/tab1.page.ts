import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme[] = [
    {
      cartaz: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX67_CR0,0,67,98_AL_.jpg',
      classificacao: 99,
      duracao: 'Em Breve',
      lancamento: 'Em Breve',
      generos: ['Ação', 'Aventura'],
      nome: 'Homem-Aranha: Sem Volta Para Casa'
    },

    {
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/h5UzYZquMwO9FVn15R2eK2itmHu.jpg',
      classificacao: 80,
      duracao: '1H 30Min',
      lancamento: '30 de set de 2021',
      generos: ['Ação', 'Aventura'],
      nome: 'Venom: Tempo de Carnificina'
    }
  ];

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
