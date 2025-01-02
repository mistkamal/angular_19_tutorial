import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {

  };

  getAllDep() {
      return  this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment")
  }

  saveNewDept(obj:any)
  {
    return  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj);
  }

  UpdateDept(obj:any)
  {
    return  this.http.put("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",obj);
  }

  DeleteDept(obj:number)
  {
    return  this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId"+obj);
  }
}
