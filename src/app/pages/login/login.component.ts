import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userAdmin:boolean = false;
  loginForm: FormGroup;
  userLogginOn: boolean = false;

  constructor(private loginService:TasksFirebaseService, private formBuilder: FormBuilder, private router: Router, private firestore:Firestore, private taskFirestoreService: TasksFirebaseService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      
    });
    this.loginService.userAdmin.subscribe({
      next: (admin: boolean) => {
        this.userAdmin = admin;
        console.log(this.userAdmin)
      },
      error: (error) => console.error('Error: ', error)
    })
    this.loginService.userLoginOn.subscribe({
      next: (logginOn: boolean) => {
      this.userLogginOn = logginOn;
    },
    error: (error) => console.error('Error: ', error)
  })
  }
  
  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  get isFormValid() {
    return this.loginForm.valid;
  }

  get emailErrors() {
    const errors = this.email.errors;
    return errors ? (errors['required'] ? 'El email es obligatorio.' : errors['email'] ? 'El mail ingresado es invalido.' : null) : null;
  }

  get passwordErrors() {
    const errors = this.password?.errors;
    return errors ? (errors['required'] ? 'La contraseña es obligatoria' : null) : null;
  }

  login() {
    
    if (this.isFormValid)
    { 
      this.taskFirestoreService.login(this.email.value, this.password.value).then((data) =>
      {
        if (this.userLogginOn ===true && this.userAdmin === true){
          this.router.navigateByUrl('/dashboard-admin');
        }
        if (this.userLogginOn ===true && this.userAdmin === false) {
          this.router.navigateByUrl('/dashboard-client');
        }
        else {

          this.loginForm.markAllAsTouched();
        }
      })
      
    }
    else
    {
      this.loginForm.markAllAsTouched();
    }
  }
}