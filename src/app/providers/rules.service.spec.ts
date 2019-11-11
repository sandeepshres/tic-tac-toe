import { TestBed } from '@angular/core/testing';

import { RulesService } from './rules.service';
import { AngularFirestore, AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

describe('RulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AngularFirestore, AngularFirestoreModule, FirestoreSettingsToken],
  }));
});
