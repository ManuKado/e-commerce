import { Inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, CollectionReference, DocumentReference, query, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc, deleteDoc } from "firebase/firestore";
export interface Product {
  codigoProducto: string;
  nombreProducto: string;
  descripcion: string;
  precioUnitario: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsCollection: CollectionReference<Product>;

  constructor(@Inject(Firestore) private afs: Firestore) {
    this.productsCollection = collection(this.afs, 'products') as CollectionReference<any>;
  }

  getProducts(): Observable<Product[]> {
    return collectionData(this.productsCollection, { idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(product: Product): Promise<DocumentReference<Product>> {
    return addDoc(this.productsCollection, product);
  }

async deleteProduct(productId: string): Promise<void> {
    const product = query(this.productsCollection, where("codigoProducto", "==", parseInt(productId)));
    const productData = await getDocs(product);
    productData.forEach(async (docSnapshot) => {

      await deleteDoc(doc(this.afs, "products", docSnapshot.id));
    });
  }
}