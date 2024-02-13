import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeserviceService } from 'src/app/Services/employeeservice.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Observable<Employee[]> = of([]);
  constructor(private service: EmployeeserviceService, private router: Router) { }
  ngOnInit() {
    this.empolyeeList();
  }
  empolyeeList() {
    this.employee = this.service.getAllEmployeeList();
  }
  employeeDetails(id: number) {
    console.log("employee in");
    this.router.navigate(['details', id]);
  }
  updateEmployee(emailId: string) {
    console.log("update in");
    this.router.navigate(['update', emailId]);
  }
  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(data => {
      this.employee = data;
    })
  }
  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
