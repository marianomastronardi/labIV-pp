import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/models/pais';
import { Repartidor } from 'src/app/models/repartidor';
import { PaisService } from 'src/app/services/pais.service';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  public fg!: FormGroup;
  repartidor:Repartidor;
  paises:any[] = [];
  formValid:boolean = true;

  constructor(private fb:FormBuilder,
    private route:Router,
    private repartidorService:RepartidorService,
    private _paisService: PaisService) { 
      this.repartidor = new Repartidor();
      this.paises = this._paisService.getAllPaises()
      .subscribe((data:any) => {
        this.paises = data;
        this.paises = this.paises.slice(1, 6)
      })
    }

  ngOnInit(): void {
    this.fg = this.fb.group({
      'dni': ['', [Validators.required]],
      'nombre': ['', [Validators.required]],
      'edad': ['', Validators.required],
      'country': ['', Validators.required],
      'capacidadTransporte': ['', [Validators.required]],
      'unidadPropia': ['', Validators.required],
    })
    //this.fg.controls['sexo'].patchValue('Femenino');
  }

  save(){
    this.repartidorService.create(this.repartidor);
    this.route.navigate(['/bienvenida']);
  }

  setCountry(pais:Pais){
    this.repartidor.paisOrigen = pais;
  }
}
