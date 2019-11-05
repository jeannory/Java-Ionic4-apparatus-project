import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { MapV1Page } from './map-v1/map-v1.page';
//https://drissas.com/ionic-google-maps/
//https://www.freakyjolly.com/ionic-4-add-google-maps-geolocation-and-geocoder-in-ionic-4-native-application/
//https://www.javascripttuts.com/implementing-native-google-maps-in-an-ionic-application/
//https://edupala.com/how-to-add-google-map-in-ionic-4/
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(
    public navCtrl : NavController
  ) {
  }

  ngOnInit() {
  }

  onGoToMapV1(){
    this.navCtrl.navigateForward('/tabs/tabs/tab2/map-v1')
  }

}
