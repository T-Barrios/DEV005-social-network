// importamos la funcion que vamos a testear
// import { auth } from '../src/lib';
import { signInWithEmailAndPassword } from '../src/lib/firebase-service';

// import { myFunction } from '../src/lib/index';

jest.mock('./lib');

// test sign in
describe('signInWithEmailAndPassword', () => {
  it('should be able to sign in with email: ejemplo@ejemplo.com and password: 123456', async () => {
    const data = await signInWithEmailAndPassword('ejemplo@ejemplo.com', '123456');
    expect(data).toBe(data);
    console.log(data);
  });
});

/*
// test google
describe('signInWithPopup', () => {
  it('debería de poder iniciar sesión con google', () => {
    signInWithPopup().then((data) => {
      expect(data).toBe('google');
    });
  });
}); */
