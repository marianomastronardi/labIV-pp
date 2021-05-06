export class Repartidor {
    dni: string; 
    nombre:string; 
    edad:number;
    capacidadTransporte:number; //(unidades de pizzas), 
    paisOrigen:any;
    unidadPropia:boolean;

    constructor(){
    this.dni = ''; 
    this.nombre = ''; 
    this.edad = 0;
    this.capacidadTransporte = 0; //(unidades de pizzas), 
    this.paisOrigen = {};
    this.unidadPropia = false;
    }
}
