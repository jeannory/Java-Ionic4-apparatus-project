import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-apparatus-single-v2',
  templateUrl: './apparatus-single-v2.page.html',
  styleUrls: ['./apparatus-single-v2.page.scss'],
})
export class ApparatusSingleV2Page implements OnInit {

  appareil:any;

  constructor(public navParams: NavParams, public modalCtrl : ModalController) { }

  ngOnInit() {
    this.appareil = this.navParams.get('apparatus');
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
