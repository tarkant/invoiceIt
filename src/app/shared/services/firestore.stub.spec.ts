import { BehaviorSubject } from 'rxjs';

/**
   * WIP
   * Replacing FireAuth with a mock taken from here :
   * https://stackoverflow.com/a/51911033/3323672
   */
const email: string = 'email';
const password: string = 'password';

export const authStub: any = {
    authState: {},
    auth: {
        signInWithEmailAndPassword() {
            return Promise.resolve();
        }
    }
};

export const FirestoreStub = {
    collection: (name: string) => ({
        doc: (_id: string) => ({
            valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
            set: (_d: any) => new Promise((resolve, _reject) => resolve()),
        }),
    }),
};