
import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TasksFirebaseService } from '../../../services/auth/tasks-firebase.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/auth/products.service';


@Component({
  selector: 'app-products-admin',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.css'
})
export class ProductsAdminComponent {
  deleteProductForm: FormGroup;
  products:any;
  constructor(private taskFirebase: TasksFirebaseService, private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router)
  {
    this.deleteProductForm = this.formBuilder.group({
      codigoProducto: ['', Validators.required, Validators.min(1)]});
    this.taskFirebase.obtenerProducts().subscribe({
      next: (data: any) => {this.products=data;
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Products List loaded')
    })
  }
  deleteProduct() {
    const codigoProducto = this.deleteProductForm.get('codigoProducto')!.value;
    if (codigoProducto) {
      this.productsService.deleteProduct(codigoProducto);
      this.deleteProductForm.reset()
    }
  }
}