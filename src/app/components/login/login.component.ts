import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  http = inject(HttpClient);
  
  userObj: any = {
    EmailId: "",
    Password: ""
  }

  router = inject(Router);
  //https://jsonplaceholder.typicode.com
  onLogin() {
    debugger
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.userObj).subscribe((res:any)=>{
      debugger
      if(res.result){
        alert('login success');
        localStorage.setItem('loginUser', JSON.stringify(res.data));
        this.router.navigateByUrl('add-emp');
      }
      else{
        alert('wrong Credential');
      }
    })
    //<!--Login Manually-->

    // if (this.userObj.EmailId == "Admin" && this.userObj.Password == "1234") {
    //   alert('Login Success');
    //   localStorage.setItem('loginUser', this.userObj.EmailId);
    //   this.router.navigateByUrl('add-emp');
    // }
    // else {
    //   alert('wrong Credential');
    // }
  }


}
