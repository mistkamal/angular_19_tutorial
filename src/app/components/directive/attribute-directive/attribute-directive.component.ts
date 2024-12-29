import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  bgDiv1class :string= 'bg-primary';
  isDiv2visible:boolean= true;
  num1:string ="";
  num2:string ="";
  ischeck : boolean =false;
  mystate:string="aa";

  Customstyle:any={
    'color':'red',
    'background-color' : 'yellow',
    'width':'200px',
    'height':'100px',
    'border-radius':'50%',
    'text':'center'
  }

  studentList:any[]=[
    {studentId:1,name:'kamal hh',mobie:9726178097,isactive:true,marks:30},
    {studentId:2,name:'kamal gg',mobie:9726178096,isactive:false,marks:75},
    {studentId:3,name:'kamal jj',mobie:9726178094,isactive:true,marks:90},
    {studentId:4,name:'kamal mm',mobie:9726178093,isactive:false,marks:100}
  ];
  redDiv1(){
    this.bgDiv1class = 'bg-danger';
    }
    greenDiv1(){
      this.bgDiv1class = 'bg-success';
    }
    
    toggleDiv2(){
      this.isDiv2visible = !this.isDiv2visible;
    }
}
