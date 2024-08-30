import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { getFirestore, provideFirestore , } from "@angular/fire/firestore";
import { provideFirebaseApp , initializeApp} from "@angular/fire/app";

const firebaseConfig = {
  apiKey: "AIzaSyA7U8DDWl_Hj-36B54ozXCxXnlhGqtTQBo",
  authDomain: "e-commerce-606d7.firebaseapp.com",
  projectId: "e-commerce-606d7",
  storageBucket: "e-commerce-606d7.appspot.com",
  messagingSenderId: "440261847591",
  appId: "1:440261847591:web:35bd011e841799bebabc02"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
  provideFirestore(()=> getFirestore()),]


};
