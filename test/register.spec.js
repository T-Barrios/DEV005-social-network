/**
 * @jest-environment jsdom
 */

import * as auth from '../src/lib/firebase-service.js';
import register from '../src/Views/register';

// Test register
describe('register', () => {
  test('is a function', () => {
    expect(typeof register).toBe('function');
  });
  test('buttonRegister exists', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const haveAButton = DOM.querySelector('.buttonRegister');
    expect(haveAButton).not.toBe(undefined);
  });
});

describe('Button register', () => {
  test('Test of click button save', () => {
    // eslint-disable-next-line max-len
    jest.spyOn(auth, 'createUserWithEmailAndPassword').mockImplementation(() => Promise.resolve({ email: 'ejemplo@ejemplo.com' }));
    const DOM = document.createElement('div');
    DOM.append(register());
    const email = DOM.querySelector('#inputMail');
    const password = DOM.querySelector('#inputPass');
    const passConfirm = DOM.querySelector('#inputPassConfirm');
    email.value = 'ejemplo@ejemplo.com';
    password.value = '123456';
    passConfirm.value = '123456';

    const buttonRegister = DOM.querySelector('#buttonRegister');
    buttonRegister.click();
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line max-len
    expect(auth.createUserWithEmailAndPassword).toHaveBeenLastCalledWith('ejemplo@ejemplo.com', '123456');
    setTimeout((done) => {
      const navigateTo = jest.fn();
      DOM.append(register(navigateTo));
      expect(navigateTo).toHaveBeenLastCalledWith('/welcome');
      done();
    }, 0);
  });
});
