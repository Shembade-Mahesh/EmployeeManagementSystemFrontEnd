import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  
  baseUrl="http://localhost:8080";
  constructor(private http:HttpClient) { }

  saveEmployee(employee:Object){
    return this.http.post(`${this.baseUrl}/EmployeeMangement/save`,employee);
  }

  getOneEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/EmployeeMangement/EmployeeDetails/${id}`);
  }
  getEmployee(emailId:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/EmployeeMangement/EmployeeD/${emailId}`)
  }
  getAllEmployeeList():any{
    return this.http.get(`${this.baseUrl}/EmployeeMangement/Employeelist`)
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/EmployeeMangement/Delete/${id}`);
  }
  updateEmployee(employee:Object){
    return this.http.put(`${this.baseUrl}/EmployeeMangement/update`,employee);
  }

}
