import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService , Product} from '../../../services/auth/products.service';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-eliminate-product',
  standalone: true,
  imports: [RouterLink,FormsModule, ReactiveFormsModule], 
  templateUrl: './add-eliminate-product.component.html',
  styleUrls: ['./add-eliminate-product.component.css']
})

export class AddEliminateProductComponent {
  productForm: FormGroup;
  deleteProductForm: FormGroup;

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private router: Router) {
    this.productForm = this.formBuilder.group({
      codigoProducto: ['', Validators.required, Validators.min(1)],
      nombreProducto: ['', Validators.required],
      descripcion: ['', Validators.required,],
      precioUnitario: ['', Validators.required, Validators.min(1)]
    });

    this.deleteProductForm = this.formBuilder.group({
      codigoProducto: ['', Validators.required, Validators.min(1)]});
  }

  addProduct() {
    this.productsService.addProduct(this.productForm.value as Product);
  }

  deleteProduct() {
  const codigoProducto = this.deleteProductForm.get('codigoProducto')!.value;
  if (codigoProducto) {
    this.productsService.deleteProduct(codigoProducto);
    console.log("funco", codigoProducto)
  }
}
}