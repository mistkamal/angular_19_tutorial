import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstname = signal("angular")
  lastname = signal("18")
  rollnumber = signal<number>(1233)
  fullname = computed(() => this.firstname() + " " + this.lastname())

  cityName = signal(['Surat', 'vaodra'])
  studentObj1 = signal({
    name: 'lamaa',
    City: 'Sitah'
  })
  ChnageName() {
    this.firstname.set("React JS")
  }

  Stdcity() {
    this.studentObj1.set({ ...this.studentObj1(), City: 'aaaa' })
  }
  Addcity() {
    this.cityName.set([...this.cityName(), "Nagpur"])
  }
  LastChnageName() {
    this.lastname.set("New Last Name")
  }
  constructor() {
    const kk = this.firstname();
    setTimeout(() => {
      //this.firstname.set("Start React JS")
    }, 5000);
  }
}
