import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
userlist:any[]=[];
customerlist:any[]=[];

constructor(private http:HttpClient)
{
  //this.getAllUser();
}


getAllUser()
{
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    debugger;
    this.userlist=res;
  })
}

getAllCustomer(){
  debugger
this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res:any)=>{
  debugger
  this.customerlist = res.data;
},error=>{
  debugger
})
}

}
