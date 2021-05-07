import { Component, OnInit } from '@angular/core';
import { Pizzas } from 'src/app/models/pizzas';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css']
})
export class SalenPizzasComponent implements OnInit {

  pizzas:Pizzas[] = [];
  pizzaSelected!:Pizzas;
  create:boolean = true;
  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getAll()
    .valueChanges()
    .subscribe((data:any) => {
      this.pizzas = data;
    })
  }

  edit(pizza:Pizzas){
    this.pizzaSelected = pizza;
  }

  save(pizza:Pizzas){
    this.create = !this.create;
    this.pizzaService.create(pizza);
  }

  alta(){
    this.create = !this.create;
  }

}
