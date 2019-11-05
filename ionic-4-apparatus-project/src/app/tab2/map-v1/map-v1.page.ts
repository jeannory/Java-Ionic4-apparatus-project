import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular'

//https://drissas.com/ionic-google-maps/
@Component({
  selector: 'app-map-v1',
  templateUrl: './map-v1.page.html',
  styleUrls: ['./map-v1.page.scss'],
})
export class MapV1Page implements OnInit {
  map: GoogleMap

  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private plateform: Platform
    ) {
      if(this.plateform.is('cordova')){
        this.loadMap();
      }
   }

  ngOnInit() {
  }

  loadMap(){
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: '***',
      API_KEY_FOR_BROWSER_DEBUG: '***'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 49.2382,
          lng: 2.2
        },
        zoom: 15,
        tilt: 45
      }
    });
  }


  async mapOptions(){
    const actionSheet = await this.actionCtrl.create({
      buttons : [
        {
          text: 'Satellite',
          handler: () => 
          {
            this.map.setMapTypeId(GoogleMapsMapTypeId.SATELLITE);
          }
        },
        {
          text: 'Plan',
          handler: () =>
          {
            this.map.setMapTypeId(GoogleMapsMapTypeId.NORMAL);
          }
        },
        {
          text: 'Terrain',
          handler: () =>
          {
            this.map.setMapTypeId(GoogleMapsMapTypeId.TERRAIN);
          }
        },
        {
          text: 'Hybrid',
          handler: () =>
          {
            this.map.setMapTypeId(GoogleMapsMapTypeId.HYBRID);
          }
        },
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            //
          }
        }
    ]
    });
    await actionSheet.present();
  }

  placeMarker(marketTitle: string) {
    const marker: Marker = this.map.addMarkerSync({
      title: marketTitle,
      icon: 'red',
      animation: 'DROP',
      position: this.map.getCameraPosition().target
    });
  }

  async addMarker() {
    const alert = await this.alertController.create({
      header: 'Ajouter un emplacement',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Le titre'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //
          }
        },
        {
          text: 'Ajouter',
          handler: data => {
            this.placeMarker(data.title)
          }
        }
      ]
    });
    await alert.present();
  }

}
