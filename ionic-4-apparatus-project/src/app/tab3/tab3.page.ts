import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogginPage } from './loggin/loggin.page';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }

  async goToLogginForm(){
    const modalPage = await this.modalCtrl.create({
      component:LogginPage
    });
    return await modalPage.present();
  }

}
