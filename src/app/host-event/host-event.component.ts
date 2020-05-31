import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.css']
})
export class HostEventComponent implements OnInit {

  eventForm: Event = new Event(0, "", "", "", "", "", 0, true, "");
  message: string

  constructor(private service: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  createEvent() {
    this.service.createEvents(this.eventForm).subscribe(response => { this.message = response; console.log(response); 
      if(response=='failure'){
      this.message="Unsuccessful,Please enter correct Organizer id";
      setTimeout(()=>{this.router.navigateByUrl("/hostevent")
    },4000)
      //this.router.navigateByUrl("/userevents")
    }
      else{
        this.message="Successfull!! ,Routing to homepage"
      setTimeout(()=>{this.router.navigateByUrl("/userevents")
    },4000)
        //this.router.navigateByUrl("/hostevent")
     };
     });
    console.log("from add events " + this.message)

  }

}
