import { Inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, CollectionReference, DocumentReference} from '@angular/fire/firestore';

export interface Register {
  nombreUsuario: string;
  email: string;
  password: string;
  admin: false;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerCollection: CollectionReference<Register>;
  constructor(@Inject(Firestore) private afs: Firestore) {
    this.registerCollection = collection(this.afs, 'users') as CollectionReference<Register>;
   }

  addUser(User: Register): Promise<DocumentReference<Register>> {
    return addDoc(this.registerCollection, User);
  }
}



  