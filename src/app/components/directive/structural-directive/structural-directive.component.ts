import { CommonModule } from '@angular/common';
import { FactoryTarget } from '@angular/compiler';
import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { raceWith } from 'rxjs';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
isDiv1visible:boolean= true;
isDiv2visible:boolean= true;
num1:string ="";
num2:string ="";
ischeck : boolean =false;
mystate:string="";

city:string[]=['abc','bca','cba','bbc']
studentList:any[]=[
  {studentId:1,name:'kamal hh',mobie:9726178097,isactive:true},
  {studentId:2,name:'kamal gg',mobie:9726178096,isactive:false},
  {studentId:3,name:'kamal jj',mobie:9726178094,isactive:true},
  {studentId:4,name:'kamal mm',mobie:9726178093,isactive:false}
];

constructor(private router:Router)
{

}

showDiv1(){
this.isDiv1visible = true;
}
hideDiv1(){
  this.isDiv1visible = false;
}

toggleDiv2(){
  this.isDiv2visible = !this.isDiv2visible;
}

NavigateToAttribute()
{
  this.router.navigateByUrl("attribute-directive");
}
}
