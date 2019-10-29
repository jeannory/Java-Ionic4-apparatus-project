import { Component, OnInit, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async onToggleLights() {
    let alert =await  this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      message: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    await alert.present();
  }

}
