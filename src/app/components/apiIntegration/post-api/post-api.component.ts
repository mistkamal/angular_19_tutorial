import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  departmentlist: any[] = [];
  depatObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };

  http = inject(HttpClient);
  ngOnInit(): void {
    this.getdepartment();
  };

  onSave() {
    debugger
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.depatObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        alert('department add succesfull');
        this.getdepartment();
      }
      else {
        alert(res.message);
      }
    })
  };

  getdepartment() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
      this.departmentlist = res.data;
    })
  };

  onEdit(data: any) {
    this.depatObj = data;
  };

  onUpdate(data: any) {
    this.depatObj = data;
    this.http.put("", data).subscribe((res: any) => {
      if (res.result) {
        alert('department Update succesfull');
        this.getdepartment();
      }
      else {
        alert(res.message);
      }
    })
  };

  onDelete(myid: number) {
    const isdelete = confirm("are you sure to delete");
    if (isdelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId" + myid).subscribe((res: any) => {
        if (res.result) {
          alert('department Deleted succesfull');
          this.getdepartment();
        }
        else {
          alert(res.message);
        }
      })
    }

  }
}
