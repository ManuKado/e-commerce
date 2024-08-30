import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
  constructor(private taskFirebase: TasksFirebaseService)
  {
 
    this.taskFirebase.obtenerProducts().subscribe({
     next: data => {this.products=data;
     },
     error: error => console.error('Error: ', error),
     complete: () => console.log('Products List loaded')
    })
 
  }
 }
