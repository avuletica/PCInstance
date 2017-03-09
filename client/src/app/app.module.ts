import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';

import { AppComponent }           from './app.component';
import { NavigationComponent }    from './components/navigation/navigation.component';
import { HomeComponent }          from './components/home/home.component';
import { FooterComponent }        from './components/footer/footer.component';
import { RegistrationComponent }  from './components/registration/registration.component';
import { LoginComponent }         from './components/login/login.component';
import { CartComponent }          from './components/cart/cart.component';
import { ProductsComponent }      from './components/products/products.component';

import { AppRoutingModule }       from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    CartComponent,
    ProductsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
