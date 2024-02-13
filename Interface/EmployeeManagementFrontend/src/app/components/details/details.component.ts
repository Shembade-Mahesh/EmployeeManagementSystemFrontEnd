import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeservice.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number=0;
  employee:Employee=new Employee();

  constructor(private route:ActivatedRoute,private router:Router,private service:EmployeeserviceService){}

  ngOnInit() {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];
    this.service.getOneEmployee(this.id).subscribe((data)=>{
      this.employee=data;
    })
  }

}
