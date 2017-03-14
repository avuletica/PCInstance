import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './components/home/home.component';
import { RegistrationComponent }  from './components/users/registration/registration.component';
import { LoginComponent }          from './components/users/login/login.component';
import { CartComponent }          from './components/cart/cart.component';
import { ProductsComponent }      from './components/products/products.component';
import { SearchComponent }        from './components/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent }, 
  { path: 'cart',  component: CartComponent }, 
  { path: 'registration',  component: RegistrationComponent }, 
  { path: 'login',  component: LoginComponent },
  { path: 'products',  component: ProductsComponent },
  { path: 'search',  component: SearchComponent },   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
