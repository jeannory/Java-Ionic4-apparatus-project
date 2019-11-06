import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-photo-v1',
  templateUrl: './photo-v1.page.html',
  styleUrls: ['./photo-v1.page.scss'],
})
export class PhotoV1Page implements OnInit {

  image = 'assets/img/placeholder.jpg';
  imagePath: string;
  upload: any;

  constructor(
    private camera: Camera,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public afSG: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  async addPhoto(source: string){
    if (source === 'library') {
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
    else if (source === 'camera') {
      const cameraImage = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraImage;
    }
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  async uploadFirebase(){
    const loading = await this.loadingController.create();
    loading.present();
    //this.imagePath = new Date().getTime.toString + '.jpg';
    this.imagePath = 'monDossier/' + new Date().getTime() + '.jpg';
    this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
    this.upload.then(async () =>{
      this.image = 'assets/img/placeholder.jpg';
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'Votre photo a été transférer',
        buttons: ['OK']
      });
      await alert.present();
    });
  }
}
