import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  repartidores:Repartidor[] = [];
  repartidorSelected!:Repartidor;
  constructor(private repartidorService:RepartidorService) {
    
   }

  ngOnInit(): void {
    this.repartidorService.getAll()
    .valueChanges()
    .subscribe((data:any) => {
      console.log(data)
      this.repartidores = data;
    })
  }

  verDetalle(repartidor:Repartidor){
    this.repartidorSelected = repartidor;
  }

}
