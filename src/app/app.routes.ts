import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ChartComponent } from './pages/chart/chart.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { Error404Component } from './pages/error404/error404.component';
import { FacturasPendientesComponent } from './pages/facturas-pendientes/facturas-pendientes.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { PedidosPendientesComponent } from './pages/pedidos-pendientes/pedidos-pendientes.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsAdminComponent } from './pages/products-admin/products-admin.component';
import { DashboardClientComponent } from './pages/dashboard-client/dashboard-client.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PagoComponent } from './pages/pago/pago.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'dashboard-admin', component: DashboardAdminComponent },
    { path: 'dashboard-client', component: DashboardClientComponent},
    { path: 'error-404', component: Error404Component },
    { path: 'facturas-pendientes', component: FacturasPendientesComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pedidos-pendientes', component: PedidosPendientesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'products-admin', component: ProductsAdminComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'pago', component: PagoComponent},

    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];

