import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';

//un decorateur = une fct qui ajoute une certaine particularité à une classe

//declarations pour déclarer tous les composants de notre prj angular

//bootstrap: [AppComponent] : declarer le composant racine

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //commu avec backend
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
