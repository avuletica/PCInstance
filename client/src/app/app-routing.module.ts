import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './components/home/home.component';
import { RegistrationComponent }  from './components/registration/registration.component';
import { LoginComponent }         from './components/login/login.component';
import { CartComponent }          from './components/cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent }, 
  { path: 'cart',  component: CartComponent }, 
  { path: 'registration',  component: RegistrationComponent }, 
  { path: 'login',  component: LoginComponent },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
