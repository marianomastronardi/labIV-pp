import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizzas } from 'src/app/models/pizzas';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  @Output() eventAltaPizza:EventEmitter<Pizzas> = new EventEmitter<Pizzas>();
  pizza:Pizzas = new Pizzas();
  constructor() { }

  ngOnInit(): void {
  }

  
  save(){
    this.eventAltaPizza.emit(this.pizza);

  }

}
