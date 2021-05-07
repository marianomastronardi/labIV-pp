import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { BienvenidaComponent } from './components/pages/bienvenida/bienvenida.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SalenPizzasComponent } from './components/pages/salen-pizzas/salen-pizzas.component';
import { RepartidorDetalleComponent } from './components/repartidor-detalle/repartidor-detalle.component';

const routes: Routes = [
  {path: 'salenPizzas', component: SalenPizzasComponent},
  {path: 'repartidor/detalle', component: RepartidorDetalleComponent},
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
