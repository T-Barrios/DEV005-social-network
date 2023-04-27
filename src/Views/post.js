import {
  addDoc, collection, doc, getDocs, updateDoc, onSnapshot, query, arrayRemove, arrayUnion, increment,
} from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import { auth, db } from '../lib';
import { signOut } from '../lib/firebase-service';
// import { array } from 'yargs';

function post() {
  const section = document.createElement('article');
  section.className = 'containerSection';
  // Contenedor header post
  const containerHeader = document.createElement('section');
  containerHeader.className = 'containerHeader';
  const containerLogoPost = document.createElement('div');
  containerLogoPost.className = 'containerLogoPost';
  const logoPost = document.createElement('img');
  logoPost.className = 'logoPost';
  logoPost.src = './Img/logo-post.png';
  const containerUserIcon = document.createElement('div');
  containerUserIcon.className = 'containerUserIcon';
  const userIcon = document.createElement('img');
  userIcon.src = './user-icon/icon-green-mushroom.png';
  userIcon.id = 'userIcon';
  userIcon.className = 'modalOpen';

  // Container menu
  const containerMenu = document.createElement('div');
  containerMenu.className = 'containerMenu';
  const btnNewPost = document.createElement('button');
  btnNewPost.textContent = '+';
  btnNewPost.id = 'btnNewPost';

  // modal. contenedor (div)
  const containerModal = document.createElement('div');
  containerModal.id = 'containerModal';
  containerModal.className = 'modal';
  // modal content div --> contiene: span (x que cierra) y texto de las opciones (logout)
  const divModal = document.createElement('div');
  divModal.className = 'modalContent';
  const spanCloseModal = document.createElement('span');
  spanCloseModal.innerHTML = '&times;';
  spanCloseModal.className = 'close';
  const btnLogOut = document.createElement('p');
  btnLogOut.textContent = 'Cerrar Sesión';
  btnLogOut.className = 'textModal';
  const btnMyWall = document.createElement('p');
  btnMyWall.textContent = ('Mis publicaciones');
  btnMyWall.className = 'textModal';

  // modal posteo
  // modal. contenedor (div)
  const containerModalPost = document.createElement('div');
  containerModalPost.id = 'containerModalPost';
  containerModalPost.className = 'modal';
  // modal content div --> contiene boton postear y el contenido
  const divModalPost = document.createElement('div');
  divModalPost.className = 'modalContentPost';
  const textPost = document.createElement('textarea');
  textPost.className = 'textPost';
  textPost.placeholder = '¿Hola, qué hace?';
  textPost.required = 'true';
  const divNoTextAlert = document.createElement('div');
  divNoTextAlert.className = 'divNoTextAlert';
  const noTextAlert = document.createElement('p');
  noTextAlert.textContent = 'Debe ingresar un texto';
  noTextAlert.id = 'noTextAlert';
  const btnPublish = document.createElement('button');
  btnPublish.textContent = 'Publicar';
  btnPublish.id = 'btnPublish';
  btnPublish.className = 'button';
  btnPublish.type = 'submit';

  divNoTextAlert.append(noTextAlert);
  divModalPost.append(textPost, btnPublish, divNoTextAlert);
  containerModalPost.append(divModalPost);

  divModal.append(spanCloseModal, btnLogOut, btnMyWall);
  containerModal.append(divModal);

  containerUserIcon.append(userIcon, containerModal);
  containerLogoPost.append(logoPost);

  containerHeader.append(containerLogoPost, containerUserIcon);
  containerMenu.append(btnNewPost);
  section.append(containerHeader, containerMenu, containerModalPost);

  btnLogOut.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user signed out');
  });

  // funciones click modal
  userIcon.onclick = function () {
    containerModal.style.display = 'block';
  };

  spanCloseModal.onclick = function () {
    containerModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === containerModal) {
      containerModal.style.display = 'none';
    }
  };

  // funciones click modal post
  btnNewPost.onclick = function () {
    noTextAlert.style.display = 'none';
    containerModalPost.style.display = 'block';
    textPost.value = '';
  };

  window.onclick = function (event) {
    if (event.target === containerModalPost) {
      containerModalPost.style.display = 'none';
    }
  };

  // Dar like
  const likeEvent = (likesIcon) => {
    likesIcon.addEventListener('click', async (e) => {
      const likeRef = doc(db, 'post', e.target.dataset.id);
      await updateDoc(likeRef, {
        like: arrayUnion(auth.currentUser.email),
      });
    });
  };

  // Agregar post
  btnPublish.addEventListener('click', async () => {
    if (textPost.value === '') {
      noTextAlert.style.display = 'block';
      console.log('post vacio');
    } else {
      noTextAlert.style.display = 'none';
      // necesito esto
      const docRef = await addDoc(collection(db, 'post'), {
        author: auth.currentUser.email,
        content: textPost.value,
        like: [],
        date: Date.now(),
      });
      console.log('Document written with ID: ', docRef.id);
      console.log('texto', textPost.value);
      containerModalPost.style.display = 'none';
    }
  });

  /*  pedir OH
  if (textPost.value.length !== '') {
    noTextAlert.style.display = 'none';
  } */

  // Agregar listener para nuevos posts
  const getPosts = (callback) => {
    const queryPost = query(collection(db, 'post'));
    onSnapshot(queryPost, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((snap) => {
        console.log('snap data: ', snap.data());
        console.log('snap id: ', snap.id);
        posts.push({ document: snap.data(), idDocument: snap.id });
      });
      callback(posts);
    });
  };

  // Obtener todos los post
  async function getAllPosts() {
    getPosts((posts) => {
      section.querySelectorAll('.containerMain').forEach((e) => e.remove());
      posts.forEach((singlePost) => {
        // doc.data() is never undefined for query doc snapshots
        const docData = singlePost.document;
        const onlyID= singlePost.idDocument;
        console.log(singlePost);
        // Container main
        const containerMain = document.createElement('section');
        containerMain.className = 'containerMain';
        // Container header post
        const containerHeaderPost = document.createElement('div');
        containerHeaderPost.className = 'containerHeaderPost';
        const containerUserEmail = document.createElement('div');
        containerUserEmail.className = 'containerUserEmail';
        const userEmail = document.createElement('p');
        userEmail.textContent = docData.author;
        const containerUserIconPost = document.createElement('div');
        containerUserIconPost.className = 'containerUserIconPost';
        const userIconPost = document.createElement('img');
        userIconPost.src = './user-icon/icon-red-mushroom.png';
        userIconPost.id = 'userIconPost';
        // Container post
        const containerPost = document.createElement('div');
        containerPost.className = 'containerPost';
        const txtPost = document.createElement('p');
        txtPost.textContent = docData.content;
        // improvisado de borrado
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'bottar';
        buttonDelete.addEventListener('click', () => {
          console.log('voy a borrar ', onlyID);
        });
        // Container footer post
        const containerFooterPost = document.createElement('div');
        containerFooterPost.className = 'containerFooterPost';
        const containerNumberOfLikes = document.createElement('div');
        containerNumberOfLikes.className = 'containerNumberOfLikes';
        const numberOfLikes = document.createElement('p');
        numberOfLikes.textContent = docData.like;
        numberOfLikes.id = 'numberOfLikes';
        const containerLikesIcon = document.createElement('div');
        containerLikesIcon.className = 'containerLikesIcon';
        const likesIcon = document.createElement('img');
        likesIcon.src = './Img/icon-likes.png';
        likesIcon.id = 'likesIcon';
        // const docRef = collection(db, 'post');
        likesIcon.dataset.id = singlePost.id;
        console.log('nose na', singlePost.data);

        // apendizaje de container main (post)
        containerUserIconPost.append(userIconPost);
        containerUserEmail.append(userEmail);
        containerFooterPost.append(containerNumberOfLikes, containerLikesIcon);
        containerNumberOfLikes.append(numberOfLikes);
        containerLikesIcon.append(likesIcon);
        containerHeaderPost.append(containerUserIconPost, containerUserEmail);
        containerPost.append(txtPost);
        containerMain.append(containerHeaderPost, containerPost, containerFooterPost, buttonDelete);
        section.append(containerMain);
        likeEvent(likesIcon);
      });
    });
  }
  getAllPosts();

  document.body.style.backgroundColor = '#262523';
  return section;
}

export default post;
