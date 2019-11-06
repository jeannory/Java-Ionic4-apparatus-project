import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apparatus } from '../models/apparatus.model';
import { environment } from 'src/environments/environment.local.lan';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  APIEndpoint:any = environment.APIEndpoint;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(){
  }

   getApparatuses(): Observable<any> {
    return this.httpClient
      .get<any>(environment.APIEndpoint + 'api/v1/apparatus/getApparatuses');
  }

  setApparatus(apparatus : Apparatus): Observable<any> {
    return this.httpClient
    .put<any>(environment.APIEndpoint + 'api/v1/apparatus/setApparatus', apparatus);
  }

  addApparatus(apparatus : Apparatus): Observable<any> {
    return this.httpClient
    .post<any>(environment.APIEndpoint + 'api/v1/apparatus/addApparatus', apparatus);
  }

}
