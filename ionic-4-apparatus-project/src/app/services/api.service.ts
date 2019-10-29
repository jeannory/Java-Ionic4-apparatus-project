import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  constructor(private httpClient : HttpClient) { }

  ngOnInit(){
  }

  getApparatuses(){
    return this.httpClient.get('localhost:8080/api/v1/apparatus/getApparatuses');
  }

   // Get students data
   getList(): Observable<any> {
    return this.httpClient
      .get<any>('http://127.0.0.1:8080/api/v1/apparatus/getApparatuses');
  }

}
