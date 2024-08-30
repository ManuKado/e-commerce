import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-dashboard-client',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.css'
})
export class DashboardClientComponent{
  pedidos:any;
  products:any;
  pedidoId:any;
  constructor(private taskFirebase: TasksFirebaseService)
 {

   this.taskFirebase.obtenerPedidos().subscribe({
    next: data => {this.pedidos=data;
    },
    error: error => console.error('Error: ', error),
    complete: () => console.log('Pedido loaded')
   })

 }
 mostrarProducts(id:any){
  this.taskFirebase.obtenerProductosPedidos(id).subscribe({
    next: data => {this.products=data;
    },
    error: error => console.error('Error: ', error),
    complete: () => console.log('Pedido loaded')
   })
 }
}