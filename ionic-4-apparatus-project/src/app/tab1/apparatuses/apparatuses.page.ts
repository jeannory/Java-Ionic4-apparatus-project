import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ApparatusSingleV2Page } from '../apparatus-single-v2/apparatus-single-v2.page';
import { Apparatus } from 'src/app/models/apparatus';

@Component({
  selector: 'app-apparatuses',
  templateUrl: './apparatuses.page.html',
  styleUrls: ['./apparatuses.page.scss'],
})
export class ApparatusesPage implements OnInit {

  apparatuses : Apparatus[];

  constructor(
    private apiService : ApiService,
    private modalCtrl : ModalController
    ) {
  this.apparatuses = [];
   }

  ngOnInit() {
    this.getApparatuses() ;
  }

 getApparatuses() {
  this.apiService.getApparatuses().subscribe(response => {
    console.log(response);
    this.apparatuses = response;
  })
}

lightOffApparatus(apparatus:Apparatus){
  apparatus.light=false;
  this.setApparatus(apparatus);
}

lightOnApparatus(apparatus:Apparatus){
  apparatus.light=true;
  this.setApparatus(apparatus);
}

setApparatus(apparatus:Apparatus){
  this.apiService.setApparatus(apparatus).subscribe(response => {
    console.log(response);
    this.apparatuses = response;
  })
}

async onLoadApparatus(apparatus:{name:string, description:string[]})
{

  const modalPage = await this.modalCtrl.create({
    component: ApparatusSingleV2Page, 
    componentProps:{ apparatus : apparatus}
  });

  return await modalPage.present();
}

}
