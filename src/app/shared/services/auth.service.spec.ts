import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { authStub, FirestoreStub } from './firestore.stub.spec';

describe('AuthService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFireAuth, useValue: authStub },
      { provide: AngularFirestore, useValue: FirestoreStub },
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
