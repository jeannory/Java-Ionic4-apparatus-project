import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apparatus } from '../models/apparatus';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  constructor(private httpClient : HttpClient) { }

  ngOnInit(){
  }

   getApparatuses(): Observable<any> {
    return this.httpClient
      .get<any>('http://127.0.0.1:8080/api/v1/apparatus/getApparatuses');
  }

  setApparatus(apparatus : Apparatus): Observable<any> {
    return this.httpClient
    .put<any>('http://127.0.0.1:8080/api/v1/apparatus/setApparatus', apparatus);
  }

}
