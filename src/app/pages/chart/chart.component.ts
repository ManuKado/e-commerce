import { Component } from '@angular/core';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  precioTotal: number = 0;

  chart: any;
  constructor(private taskFirebase: TasksFirebaseService) {
    this.taskFirebase.obtenerChart().subscribe({
      next: data => {
        this.chart = data;
        this.precioTotal = 0;
        data.forEach((item: { precioUnitario: number; cantidadProducto: number; }) => {
          this.precioTotal += item.precioUnitario * item.cantidadProducto;
        });
      },
      error: error => console.error('Error: ', error),
      complete: () => console.log('Chart loaded')
    });
  }
}