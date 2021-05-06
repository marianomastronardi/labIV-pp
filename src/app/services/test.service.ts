import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Test } from "../models/test";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private dbPath = '/testFire';

  TestRef: AngularFirestoreCollection<Test>;

  constructor(private db: AngularFirestore) { 
    this.TestRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Test> {
    return this.TestRef;
  }

  create(test: Test): any {
    return this.TestRef.add({ ...test });
  }

  update(id: string, data: any): Promise<void> {
    return this.TestRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.TestRef.doc(id).delete();
  }
}
