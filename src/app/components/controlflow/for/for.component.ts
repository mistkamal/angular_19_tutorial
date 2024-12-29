import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  city:string[]=['abc','bca','cba','bbc']
  studentList:any[]=[
    {studentId:1,name:'kamal hh',mobie:9726178097,isactive:true},
    {studentId:2,name:'kamal gg',mobie:9726178096,isactive:false},
    {studentId:3,name:'kamal jj',mobie:9726178094,isactive:true},
    {studentId:4,name:'kamal mm',mobie:9726178093,isactive:false}
  ];
  daynumber:string='';
}
