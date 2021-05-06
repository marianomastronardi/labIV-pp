import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './components/pages/bienvenida/bienvenida.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path: 'alta/repartidor', component: AltaRepartidorComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'signin', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
