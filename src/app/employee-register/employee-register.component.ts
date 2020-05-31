import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

 //regiStatus:boolean=true
 usermessage:string
 employee: Employee = new Employee("","","","","")
  message: String;
 //success: string="Not Successful";
 constructor(private router: Router,private empservice:EmployeeService) { }
 success:String;
 newEmpRegistration(){
  console.log("Method is  called"+this.employee)
   this.empservice.addEmployee(this.employee).subscribe(response => {   this.message=response;
    console.log(response);
    if(this.message=="Failure")
    {
        // console.log("Failuree")
        this.usermessage="Resgistration is not successfull!!..try with different User Name"
        setTimeout(() => {
          this.router.navigateByUrl("/Register")
        }, 3000);
    }else
    {

      this.usermessage="Resgistration is successfull!!..Redirecting to login page"
        setTimeout(() => {
          this.router.navigateByUrl("/Login")
        }, 3000);

      
      //this.success="Registered successfullyy!!"
     // this.login_emp_id=this.employee.employee_id;
      //console.log("After navigating"+this.login_emp_id)
    } });
  
 
 }

 ngOnInit(): void {
 }

}
