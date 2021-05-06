import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { environment } from "../environments/environment";
import { BienvenidaComponent } from './components/pages/bienvenida/bienvenida.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
