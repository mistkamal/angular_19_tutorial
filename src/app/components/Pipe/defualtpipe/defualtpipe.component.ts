import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { NaPipe } from '../../../pipes/na.pipe';

@Component({
  selector: 'app-defualtpipe',
  imports: [NaPipe,AsyncPipe,JsonPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './defualtpipe.component.html',
  styleUrl: './defualtpipe.component.css'
})
export class DefualtpipeComponent {
firstNameU:string = "kamal mistry";
firstNameL:string = "KAMAL mistry";
firstNameFF:string = "KAMAL mistry are u ready";
currentdate:Date=new Date();
student : any={
  name:'Kamal',
  city:'Surat',
  stdid:123,
  state:''
}
currenttime:Observable<Date>=new Observable<Date>;

constructor(){
  setInterval(()=>{
    this.currenttime= interval(1000).pipe(map(()=>new Date()))
  },5000)
}

}
