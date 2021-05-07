import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pizzas } from '../models/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private dbPath = '/pizzaFire';
  PizzaRef: AngularFirestoreCollection<Pizzas>;

  constructor(private db: AngularFirestore) { 
    this.PizzaRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Pizzas> {
    return this.PizzaRef;
  }

  create(repartidor: Pizzas): any {
    return this.PizzaRef.add({ ...repartidor });
  }

  update(id: string, data: any): Promise<void> {
    return this.PizzaRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.PizzaRef.doc(id).delete();
  }
}
