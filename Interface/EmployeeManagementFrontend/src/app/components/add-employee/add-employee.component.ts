import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeservice.service';
import { Employee } from 'src/app/model/employee';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  submitted=false;
  employee = new Employee();
  constructor(private service:EmployeeserviceService,private router:Router){}

  onsubmit(){
    this.submitted=true;
    this.save();

  }
  save(){
    this.service.saveEmployee(this.employee).subscribe();
    

  }
}
