import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, Subscription, Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ApparatusSingleV2Page } from '../apparatus-single-v2/apparatus-single-v2.page';
import { Apparatus } from 'src/app/models/apparatus.model';
import { ApparatusNewPage } from '../apparatus-new/apparatus-new.page';

@Component({
  selector: 'app-apparatuses',
  templateUrl: './apparatuses.page.html',
  styleUrls: ['./apparatuses.page.scss'],
})
export class ApparatusesPage implements OnInit, OnDestroy {

  apparatuses : Apparatus[];
  apparatusesSubscription: Subscription;

  //mettre dans un service
  apparatuses$ = new Subject<Apparatus[]>();

  constructor(
    private apiService : ApiService,
    private modalCtrl : ModalController
    ) {
  this.apparatuses = [];
   }

  ngOnInit() {
    this.getApparatuses() ;
    this.apparatusesSubscription = this.apparatuses$.subscribe(
      (appareils: Apparatus[]) => {
        this.apparatuses = appareils.slice();
      }
    );
    this.emitApparatusess();
  }

  //mettre dans un service
  emitApparatusess() {
    this.apparatuses$.next(this.apparatuses.slice());
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
    this.apparatusesSubscription = this.apparatuses$.subscribe(
      (appareils: Apparatus[]) => {
        this.apparatuses = appareils.slice();
      }
    );
    this.emitApparatusess();
  }, err => {
    console.log(err);
    alert(err.message);
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

async goToApparatusForm(){
  const modalPage = await this.modalCtrl.create({
    component: ApparatusNewPage
  });
  return await modalPage.present();
}

ngOnDestroy() {
  this.apparatusesSubscription.unsubscribe();
}

}
