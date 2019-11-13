import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(
    public navCtrl : NavController,
    //private router : Router
  ) {
  }

  ngOnInit() {
  }

  onGoToMapV1(){
    this.navCtrl.navigateForward('/tabs/tabs/tab2/map-v1');
  }

  onGoToPhotoV1(){
    this.navCtrl.navigateForward('/tabs/tabs/tab2/photo-v1');
  }

  onGoToFolderV1(){
    this.navCtrl.navigateForward('/tabs/tabs/tab2/folder-v1');
    //this.router.navigateByUrl(`/tabs/tab2/folder-v1`);
  }

}
