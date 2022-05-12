import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private client:HttpClient) { }

   baseURL="http://localhost:5190/";
  

   getNews(){
      return this.client.get(this.baseURL+"News");
   }
}
