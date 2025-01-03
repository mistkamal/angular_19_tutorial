import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);
  loggedUserData:any;
  constructor(){
    const loggeddata = localStorage.getItem('loginUser')
    if(loggeddata != null)
    {
      this.loggedUserData = JSON.parse(loggeddata);
    }
  }

  logoff(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
}
