import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [CommonModule,FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  isDiv1visible:boolean= true;
isDiv2visible:boolean= true;
num1:string ="";
num2:string ="";
ischeck : boolean =false;
mystate:string="";

showDiv1(){
  this.isDiv1visible = true;
  }
  hideDiv1(){
    this.isDiv1visible = false;
  }
  
  toggleDiv2(){
    this.isDiv2visible = !this.isDiv2visible;
  }
}
