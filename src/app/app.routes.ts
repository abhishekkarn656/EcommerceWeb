import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './admin/Components/dashboard/dashboard.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'admin',loadChildren:()=>import("./admin/admin.module").then(n=>n.AdminModule)},
  { path: 'customer/dashboard', component: DashboardComponent },
  { path: 'admin/dashboard', component:DashboardComponent },

//   { path: 'customer', component: CustomerComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '**', redirectTo: '/login' }
];
