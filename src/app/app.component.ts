import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News Management System';
  constructor(public ser:ApiserviceService) {
    this.ser.getNews().subscribe((data)=>{
      this.data=data;
    });
  }
  data:any=[];

  printData(){
   this.ser.getNews().subscribe((data)=>{
     this.data=data;
     console.warn(data);
   });
 }
 
}
