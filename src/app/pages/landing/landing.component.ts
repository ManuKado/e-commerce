import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  userLoginOn: boolean= false;

  constructor(private loginService:TasksFirebaseService, private router:Router)  
  {
     this.loginService.userLoginOn.subscribe({
       next: (loginStatus: boolean) => {
         this.userLoginOn = loginStatus;
       },
       error: (error) => console.error('Error: ', error)
     }) 
  }
}
