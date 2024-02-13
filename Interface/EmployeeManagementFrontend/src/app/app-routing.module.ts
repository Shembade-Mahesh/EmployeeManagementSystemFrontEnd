import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [{
  component:AddEmployeeComponent,
  path:'add-employee'
},
{
  component:EmployeeListComponent,
  path:'employeelist'
},
{
  component:DetailsComponent,
  path:'details/:id'
},
{
  component:UpdateComponent,
  path:'update/:emailId'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
