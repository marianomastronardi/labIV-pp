import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Repartidor } from '../models/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  private dbPath = '/repartidorFire';
  RepartidorRef: AngularFirestoreCollection<Repartidor>;
  constructor(private db: AngularFirestore) { 
    this.RepartidorRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Repartidor> {
    return this.RepartidorRef;
  }

  /* getById(id:string): AngularFirestoreCollection<Pelicula> {
    return  this.db.collection(this.dbPath, ref => ref.where('id', '==', id));
  }

  getMovieByActor(actor:Actores): AngularFirestoreCollection<Pelicula> {
    return  this.db.collection(this.dbPath, ref => ref.where('actores', '==', actor));
  } */

  create(repartidor: Repartidor): any {
    return this.RepartidorRef.add({ ...repartidor });
  }

  update(id: string, data: any): Promise<void> {
    return this.RepartidorRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.RepartidorRef.doc(id).delete();
  }
}
