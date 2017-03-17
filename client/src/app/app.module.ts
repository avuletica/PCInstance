import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';

import { AppComponent }               from './app.component';
import { NavigationComponent }        from './components/navigation/navigation.component';
import { HomeComponent }              from './components/home/home.component';
import { FooterComponent }            from './components/footer/footer.component';
import { RegistrationComponent }      from './components/users/registration/registration.component';
import { CartComponent }              from './components/cart/cart.component';
import { ProductsComponent }          from './components/products/products.component';
import { ProductSliderComponent }     from './components/product-slider/product-slider.component';
import { SearchComponent }            from './components/search/search.component';
import { LoginComponent }             from './components/users/login/login.component';

import { ProductDashboardComponent }  from './components/users/admin/product-dashboard/product-dashboard.component';
import { UserDashboardComponent }     from './components/users/admin/user-dashboard/user-dashboard.component';

import { AppRoutingModule }           from './app-routing.module';
import { AdminRoutingModule }         from './components/users/admin-routing.module';

import { ProductSearchPipe }          from './pipes/ProductSearchPipe';
import { ProductFilterPipe }          from './pipes/ProductFilterPipe';

 import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminRoutingModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    CartComponent,
    ProductsComponent,
    ProductSliderComponent,
    SearchComponent,
    ProductSearchPipe,
    ProductFilterPipe,    
    ProductDashboardComponent,
    UserDashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
