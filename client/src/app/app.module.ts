import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { AppComponent }             from './app.component';
import { NavigationComponent }      from './components/navigation/navigation.component';
import { HomeComponent }            from './components/home/home.component';
import { FooterComponent }          from './components/footer/footer.component';
import { RegistrationComponent }    from './components/registration/registration.component';
import { LoginComponent }           from './components/login/login.component';
import { CartComponent }            from './components/cart/cart.component';
import { ProductsComponent }        from './components/products/products.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { SearchComponent }          from './components/search/search.component';

import { AppRoutingModule }         from './app-routing.module';
import { ProductSearchPipe }        from './pipes/ProductSearchPipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
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
    ProductSearchPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
