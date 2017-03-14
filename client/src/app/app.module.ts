import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AppComponent }             from './app.component';
import { NavigationComponent }      from './components/navigation/navigation.component';
import { HomeComponent }            from './components/home/home.component';
import { FooterComponent }          from './components/footer/footer.component';
import { RegistrationComponent }    from './components/users/registration/registration.component';
import { CartComponent }            from './components/cart/cart.component';
import { ProductsComponent }        from './components/products/products.component';
import { ProductSliderComponent }   from './components/product-slider/product-slider.component';
import { SearchComponent }          from './components/search/search.component';
import { LoginComponent }           from './components/users/login/login.component';
import { AdminComponent }           from './components/users/admin/admin.component';

import { AppRoutingModule }         from './app-routing.module';
import { LoginRoutingModule }       from './components/users/login-routing.module';

import { ProductSearchPipe }        from './pipes/ProductSearchPipe';
import { ProductFilterPipe }        from './pipes/ProductFilterPipe';


@NgModule({
  imports: [
    BrowserModule,    
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginRoutingModule,
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
    LoginComponent,
    AdminComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
