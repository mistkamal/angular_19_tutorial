import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  studentform:FormGroup = new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    username:new FormControl("",[Validators.email]),
    city:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(6)]),
    state:new FormControl("",[Validators.required]),
    zipcode:new FormControl("",[Validators.required]),
    isacceptTerms:new FormControl([Validators.required,Validators.pattern('true')])
  });
  formvalue:any;
  reset(){

  };

  onsubmit(){
    debugger;
    this.formvalue = this.studentform.value;
  };
}
