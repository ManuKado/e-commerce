import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService , Product} from '../../../services/auth/products.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
  productForms: FormGroup;
  deleteProductForms: FormGroup;

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private router: Router) {
    this.productForms = this.formBuilder.group({
      codigoProducto: ['', [Validators.required, Validators.min(1)]],
      nombreProducto: ['', Validators.required],
      descripcion: ['', Validators.required,],
      precioUnitario: ['', [Validators.required, Validators.min(1)]]
    });

    this.deleteProductForms = this.formBuilder.group({
      codigoProducto: ['', Validators.required, Validators.min(1)]});
  }

  addProduct() {
    this.productsService.addProduct(this.productForms.value as Product);
    this.productForms.reset()
  }

  deleteProduct() {
  const codigoProducto = this.deleteProductForms.get('codigoProducto')!.value;
  if (codigoProducto) {
    this.productsService.deleteProduct(codigoProducto);
  }
}
}