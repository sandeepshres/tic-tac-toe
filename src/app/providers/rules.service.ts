import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rules } from '../shared/rules';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private rules: Observable<Rules[]>;
  private ruleCollection: AngularFirestoreCollection<Rules>;

  constructor(private afs: AngularFirestore) {
    this.ruleCollection = this.afs.collection<Rules>('rules');
    this.rules = this.ruleCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getRules(): Observable<Rules[]> {
    return this.rules;
  }

  getRule(id: string): Observable<Rules> {
    return this.ruleCollection.doc<Rules>(id).valueChanges().pipe(
      take(1),
      map(rule => {
        rule.id = id;
        return rule;
      })
    );
  }
}
