import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular 19";
  inputtype = "radio";
  stateName: string = "MP";
  rollnumber: number = 123;
  isindian: boolean = false;
  currentdate: Date = new Date();
  mycalssname: string = "bg-primary";
  firstName = signal("My signle");
  constructor() {

  }

  showAlert(message: string) {
    alert(message);
  }

  changecourseName() {
    this.courseName = "Kamal123 REact Js";
    this.firstName.set("Kamal Mistry");
  }
}
