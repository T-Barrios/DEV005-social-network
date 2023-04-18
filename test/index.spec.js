/**
 * @jest-environment jsdom
 */

import { auth } from '../src/lib';
import login from '../src/Views/login';
// import { signInWithEmailAndPassword } from '../src/lib/firebase-service';

// import { myFunction } from '../src/lib/index';

// test sign in
describe('login', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });
  test('btnLogin exists', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const haveAButton = DOM.querySelector('#btnLogin');
    expect(haveAButton).not.toBe(undefined);
  });
  test('register "btn" exists', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const haveAButton = DOM.querySelector('.createAccount');
    expect(haveAButton).not.toBe(undefined);
  });
  test('after click on "btn" register, it calls function navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const btnRegister = DOM.querySelector('.createAccount');
    btnRegister.click();
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });
  test('after click on "btn" register call function navigateTo with /register ', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const btnRegister = DOM.querySelector('.createAccount');
    btnRegister.click();
    expect(navigateTo).toHaveBeenLastCalledWith('/register');
  });
});

describe('Button SAVE', () => {
  test('Test of click button save', (done) => {
    jest.spyOn(auth, 'addUserToSocialNetwork').mockImplementation(() => Promise.resolve({ message: 'success', email: 'carlos@carlos.com' }));
    const DOM = document.createElement('div');
    DOM.append(signup());
    const email = DOM.querySelector('#email');
    const password = DOM.querySelector('#password');
    const answer = DOM.querySelector('#answer');
    email.value = 'carlos@carlos.com';
    password.value = '123456';

    const buttonSave = DOM.querySelector('#save');
    buttonSave.click();
    expect(auth.addUserToSocialNetwork).toHaveBeenCalledTimes(1);
    expect(auth.addUserToSocialNetwork).toHaveBeenLastCalledWith('carlos@carlos.com', '123456');
    setTimeout(() => {
      expect(answer.classList.contains('success')).toBe(true);
      expect(answer.classList.contains('error')).not.toBe(true);
      done();
    }, 0);
  });
});
