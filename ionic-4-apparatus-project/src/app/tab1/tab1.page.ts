import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  onGoToApparatuses(){
    this.navCtrl.navigateForward('/tabs/tabs/tab1/apparatuses');
  }

}
