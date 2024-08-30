import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';

@Component({
  selector: 'app-facturas-pendientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facturas-pendientes.component.html',
  styleUrl: './facturas-pendientes.component.css'
})
export class FacturasPendientesComponent {
  facturas: any;
  constructor(private taskFirebase: TasksFirebaseService)
  {
 
    this.taskFirebase.obtenerFacturas().subscribe({
     next: data => {this.facturas=data;
     },
     error: error => console.error('Error: ', error),
     complete: () => console.log('Pedido loaded')
    })
  }
}
