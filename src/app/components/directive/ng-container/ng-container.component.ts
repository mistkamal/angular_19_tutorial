import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
isvisiblecontainer : boolean = true;
isapi:boolean=false;
http = inject(HttpClient);
uselist:any[]=[];
getuser(){
  debugger
  this.isapi=true;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
    this.uselist = res;
    this.isapi=false;
  })
}
}
