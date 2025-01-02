import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  imports: [],
  templateUrl: './mybutton.component.html',
  styleUrl: './mybutton.component.css'
})
export class MybuttonComponent {
@Input() btntxt:string='';
@Input() btnclass:string='';

@Output() onbtnClick = new EventEmitter<any>();

onClick(){
  debugger
  this.onbtnClick.emit('I From Reusable');
}

}
