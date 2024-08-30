import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userAdmin:boolean = false;
  userLoginOn: boolean= false;

  constructor(private loginService:TasksFirebaseService, private router:Router)  
  {
     this.loginService.userLoginOn.subscribe({
       next: (loginStatus: boolean) => {
         this.userLoginOn = loginStatus;
       },
       error: (error) => console.error('Error: ', error)
     })

     this.loginService.userAdmin.subscribe({
       next: (admin: boolean) => {
         this.userAdmin = admin;
         
       },
       error: (error) => console.error('Error: ', error)
     })

  }

  cerrarSesion()
  {
    this.loginService.cerrarSesion();
    this.router.navigateByUrl('login');
  }

}