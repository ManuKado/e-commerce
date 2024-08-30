import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterService , Register} from '../../../services/auth/register.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+\-]).{6,12}$")]],
      passwordVerificacion: ['', Validators.required],
      admin: [false]
    });
  }
  get nombreUsuario() {
    return this.registerForm.controls['nombreUsuario'];
  }
  
  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get isFormValid() {
    return this.registerForm.valid;
  }

  get nombreUsuarioErrors() {
    const errors = this.nombreUsuario.errors;
    return errors ? (errors['required'] ? 'El nombre del usuario es obligatorio.' : null) : null;
  }

  get emailErrors() {
    const errors = this.email.errors;
    return errors ? (errors['required'] ? 'El email es obligatorio.' : errors['email'] ? 'El mail ingresado es invalido.' : null) : null;
  }

  get passwordErrors() {
    const errors = this.password?.errors;
    const passwordValue = this.registerForm.controls['password'].value;
    const passwordVerificacionValue = this.registerForm.controls['passwordVerificacion'].value;
    
    if (passwordValue !== passwordVerificacionValue) {
      return 'Las contraseñas no coinciden';
    }
  
    return errors ? (errors['required'] ? 'La contraseña es obligatoria' : errors['minlength'] ? 'La contraseña debe tener minimo 8 caracteres': errors['pattern'] ? 'Pattern' : null) : null;
  }
  addUser() {
    
    if (this.isFormValid){
      this.registerService.addUser(this.registerForm.value as Register).then((data) =>
        { 
          if (data) {
            this.router.navigateByUrl('/dashboard-client');
          }
          else {
            this.registerForm.markAllAsTouched();
          }
        })
        
      }
      else
      {
        this.registerForm.markAllAsTouched();
      }
    }
    }
