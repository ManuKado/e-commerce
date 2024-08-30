import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { getDocs, query, where } from 'firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksFirebaseService {
  
  usersCollection;
  userLoginOn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userAdmin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor(private firestore:Firestore) {
    this.usersCollection = collection(this.firestore, "users");
  }

  async login(email:string, password:string):Promise<any> {
    const user = query(this.usersCollection, where("email", "==", email), where("password", "==", password));
    let userData = await getDocs(user);
    let userDato:any;
    let userDoc;
    if (userData.empty) {
      return { message: "User not registered" };
    }
    userData.forEach(
      (doc) => {
        userDoc = JSON.parse(JSON.stringify(doc.data()));
        localStorage.setItem("userId", JSON.parse(JSON.stringify(doc.id)));
       // userDato += parseInt(userDoc.precioUnitarios);

        // behaviors
        this.userLoginOn.next(true);
        console.log(userDoc.admin)
        this.userAdmin.next(userDoc.admin);
      }
    );
    return userDoc;
  }

  get UserLoginOn():Observable<boolean> {
    return this.userLoginOn.asObservable();
  }

  get UserAdmin():Observable<boolean> {
    return this.userAdmin.asObservable();
  }

  cerrarSesion() {
    this.userLoginOn.next(false);
    this.userAdmin.next(false);
    localStorage.removeItem("userId");
  }

  obtenerProducts(): Observable<any> {
    const route = `products`;
    return collectionData(collection(this.firestore, route), {}) as Observable<any>;
  }

  obtenerChart(): Observable<any> {
    const userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
    const route = `users/${userId}/carrito`;
    return collectionData(collection(this.firestore, route), {
      idField: 'id'
    }) as Observable<any>;
  }
  obtenerPedidos(): Observable<any> {
    const userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
    const route = `users/${userId}/pedidos`;
    return collectionData(collection(this.firestore, route), {
      idField: 'id'
    }) as Observable<any>;
  }
  obtenerProductosPedidos(id:any): Observable<any> {
    const userId = localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
    const route = `users/${userId}/pedidos/${id}/products`;
    return collectionData(collection(this.firestore, route), {
      idField: 'id'
    }) as Observable<any>;
  }
  obtenerFacturas(): Observable<any> {
    const route = `facturasPendientes`;
    return collectionData(collection(this.firestore, route), {
      idField: 'id'
    }) as Observable<any>;
  }
}