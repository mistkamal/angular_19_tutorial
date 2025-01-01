import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
  studentobj:any={
    firstname:'',
    lastname:'',
    username:'',
    city:'',
    state:'',
    zipcode:'',
    isaccepterms:false
  }

  
  formvalue:any;

  onsubmit(){
debugger;
this.formvalue = this.studentobj;
  }

  reset(){
    this.studentobj={
      firstname:'',
    lastname:'',
    username:'',
    city:'',
    state:'',
    zipcode:'',
    isaccepterms:false
    }
  }
}