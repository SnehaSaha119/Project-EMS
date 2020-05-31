import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

import { Employee } from '../employee';


@Component({
  selector: 'login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

  usermessage: String
  checkEmp:boolean=true;
  employee:Employee=new Employee("","","","","");
  message: any;
  //login_emp_id: string="sushmatn@gmail.com";
  constructor(private empService: EmployeeService,private router: Router) { }
  setLoginCred(){
    
    this.empService.checkforUser(this.employee).subscribe(
      response => {
  this.message=response;
  console.log(response);
  if(this.message=="Failure")
  { console.log("Failuree")
      this.usermessage="Login Unsuccessfull!! Retry Again!!"
      setTimeout(() => {
      this.router.navigateByUrl("/Login")
      }, 3000);
     //this.router.navigateByUrl("/Login")
  }else
  {
    localStorage.clear()
    localStorage.setItem("login_id",this.employee.employee_id)
    console.log("from login.ts"+localStorage.getItem("login_id"))

    this.usermessage="Login Successfull!! Routing to homepage"
     setTimeout(() => {
    this.router.navigateByUrl("/userevents")
  }, 3000);
  
    //this.router.navigateByUrl("/userevents")
      
  } 
    });
  
   }

  ngOnInit(): void {
    console.log(this.employee)
  }

}
