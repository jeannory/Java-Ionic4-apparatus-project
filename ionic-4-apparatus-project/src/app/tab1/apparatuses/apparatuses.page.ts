import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apparatuses',
  templateUrl: './apparatuses.page.html',
  styleUrls: ['./apparatuses.page.scss'],
})
export class ApparatusesPage implements OnInit {

  //apparatuses : Observable<any>;
  apparatuses : any;

  constructor(public  apiService : ApiService) {
  //  this.apparatuses = this.apiService.getApparatuses();
  this.apparatuses = [];
   }

  ngOnInit() {
    //this.getApparatuses();
    this.getApparatuses() ;
  }

  /** 
  getApparatuses(){
    this.apiService.getApparatuses()
    .subscribe(data=>{
      this.apparatuses = data
    }),
    err=>{
      console.log(err);
    }
  }
  */

 getApparatuses() {
  //Get saved list of students
  this.apiService.getList().subscribe(response => {
    console.log(response);
    this.apparatuses = response;
  })
}

}
