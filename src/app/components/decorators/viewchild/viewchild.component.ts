import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {

ngAfterViewInit(): void {
  const vv =  this.textBox?.nativeElement.value;
  const ac = this.alrtcom?.message;
  const act = this.alrtcom?.AlertMode;
  debugger 
}

@ViewChild('txtR') textBox ?: ElementRef;
@ViewChild(AlertComponent) alrtcom ?: AlertComponent; 


}
