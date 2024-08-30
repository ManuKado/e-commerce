import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private loginService:TasksFirebaseService){}
  cerrarSesion(){
    this.loginService.cerrarSesion()
  }
}
