/**
 * @jest-environment jsdom
 */

import post from '../src/Views/post.js';

// Test post
describe('post', () => {
// testeando si "post" es una función
  test('is a function', () => {
    expect(typeof post).toBe('function');
  });
  // testeando si "btnNewPost" existe
  test('btnNewPost exists', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const haveAButton = DOM.querySelector('#btnNewPost');
    expect(haveAButton).not.toBe(undefined);
  });
  // testeando si "btnNewPost" hace click
  test('btnNewPost haga click y llama al modal de publicar', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const btnNewPostClick = DOM.querySelector('#btnNewPost');
    btnNewPostClick.click();
    const modalPost = DOM.querySelector('#containerModalPost');
    expect(modalPost.style.display).toEqual('block');
  });
  // testeando si "logoPost" existe (logo nintendo world que abre ventana nueva con link youtube)
  test('logoPost exists', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const haveAImgButton = DOM.querySelector('.logoPost');
    expect(haveAImgButton).not.toBe(undefined);
  });
  // testeando si "logoPOst" hace click
  test('logoPost haga click', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const logoPostClick = DOM.querySelector('.logoPost');
    const mock = jest.fn();
    logoPostClick.addEventListener('click', mock);
    logoPostClick.dispatchEvent(new Event('click'));
    expect(mock).toHaveBeenCalledTimes(1);
  });
  // testeando si "userIcon" existe (imagen de hongo verde que abre el modal de cerrar sesión)
  test('userIcon exists', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const haveAImgModal = DOM.querySelector('#userIcon');
    expect(haveAImgModal).not.toBe(undefined);
  });
  // testeando si "userIcon" hace click
  test('userIcon haga click', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const userIconClick = DOM.querySelector('#userIcon');
    userIconClick.click();
  });
  // test button like
  test('likesIcon exists', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const haveAImg = DOM.querySelector('#likesIcon');
    expect(haveAImg).not.toBe(undefined);
  }); /*
  test('Al hacer click en window se cierra modal ', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const modalPost = DOM.querySelector('#containerModalPost');
    expect(modalPost.style.display).toBe('block');
    const windowClick = DOM.querySelector('.containerSection');
    windowClick.click();
    const modalPostOpen = DOM.querySelector('#containerModalPost');
    expect(modalPostOpen.style.display).toBe('none');
  }); */
  test(' "btn" logOut es un boton ', () => {
    const DOM = document.createElement('div');
    const mock = jest.fn();
    DOM.append(post());
    const btnLogOut = DOM.querySelector('.textModal');
    btnLogOut.click();
    expect(mock).not.toBe(undefined);
  });
  // testeando si "btnNewPost" hace click
  test('click on spanCloseModal displays containerModal on NONE', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const spanCloseModal = DOM.querySelector('.close');
    spanCloseModal.click();
    const modalPost = DOM.querySelector('#containerModal');
    expect(modalPost.style.display).toEqual('none');
  });
  // testeando si "btnEdit" existe
  test('btnEdit exists', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const haveAButton = DOM.querySelector('#btnEdit');
    expect(haveAButton).not.toBe(undefined);
  });
  // testeando si "btnEdit" hace click y cierra modal
  test('click on btnEdit displays containerModal on NONE', () => {
    const DOM = document.createElement('div');
    DOM.append(post());
    const CloseModalEdit = DOM.querySelector('#btnEdit');
    CloseModalEdit.click();
    const modalEdit = DOM.querySelector('#containerModalEdit');
    expect(modalEdit.style.display).toEqual('');
  });
});
/*
// Test foreach
describe('getAllPosts', () => {
  // testeando si "getAllPost" es una función
  test('is a function', () => {
    expect(typeof getAllPosts).toBe('function');
  });
}); */
